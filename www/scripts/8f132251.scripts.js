"use strict";angular.module("angularApp",["ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/home",{templateUrl:"views/home.html",controller:"HomeCtrl"}).when("/play",{templateUrl:"views/play.html",controller:"PlayCtrl"}).when("/list",{templateUrl:"views/list.html",controller:"ListCtrl"}).otherwise({redirectTo:"/home"})}]).config(["$compileProvider",function(a){a.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/)}]),angular.module("angularApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("angularApp").controller("HomeCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("angularApp").controller("PlayCtrl",["$rootScope","$scope","feedLoadService",function(a){a.$on("play-episode",function(b,c){console.log("Showing episode"),console.log(c),a.episode=c,a.description=c.description})}]),angular.module("angularApp").controller("ListCtrl",["$scope","$rootScope","tabService","feedLoadService",function(a,b,c,d){b.$on("feed_load_successful",function(b,c){a.episodes=c}),a.play=function(a){console.log(a),c.switchTab("play"),b.$broadcast("play-episode",a)},d.loadFeed(0)}]),angular.module("angularApp").controller("tab",["$scope","tabService",function(a,b){a.switchTab=function(a){b.switchTab(a)},a.tabActive=function(a){return 1==b.tabActive(a)?" active ":""}}]),angular.module("angularApp").service("tabService",["$rootScope","$location",function(a,b){var c={};return c.currentTab="home",c.switchTab=function(a){"home"===a?(this.currentTab="home",b.path("/home")):"list"===a?(this.currentTab="list",b.path("/list")):"play"===a&&(this.currentTab="play",b.path("/play"))},c.tabActive=function(a){return a===this.currentTab},c}]),angular.module("angularApp").service("feedLoadService",["$http","$rootScope",function(a,b){var c={};return c.feeds=[{title:"TechCast",url:"http://emergingtech.chariotsolutions.com/category/all-podcasts/techcast/feed/",description:"The Chariot TechCast - a five-year and running podcast of all things open source."},{title:"DevNews",url:"http://emergingtech.chariotsolutions.com/category/all-podcasts/devnews/feed/",description:"The Chariot Developer News - weekly topics of interest to some of Chariot's consultants."}],c.loadFeed=function(c){var d;return 0>c||c>=this.feeds.length-1?void 0:(d=this.feeds[c],void 0!==d.feedCache?(b.$broadcast("feed_load_successful",d.feedCache),void 0):(this.loading!==!0&&(b.$broadcast("feed_loading"),a.get(d.url).success(function(a){var c=[];$(a).find("item").each(function(){var a=$(this),b=a.find("title").text(),d=a.find("description").html(),e=a.find("enclosure").attr("url");d=d.replace("<![CDATA[","").replace("]]>",""),c.push({title:b,description:d,enclosure:e})}),d.feedCache=c,b.$broadcast("feed_load_successful",c)}).error(function(a,c,e,f){console.log("error loading feed",d,a,c,e,f),b.$broadcast("feed_load_failed",d)})),void 0))},c}]);