"use strict";angular.module("angularApp",["ngTouch"]).factory("cordovaReady",function(){return function(a){var b=[],c=function(){b.push(Array.prototype.slice.call(arguments))};return document.addEventListener("deviceready",function(){b.forEach(function(b){a.apply(this,b)}),c=a},!1),function(){return c.apply(this,arguments)}}}),angular.module("angularApp",[]).config(["$routeProvider",function(a){a.when("/home",{templateUrl:"views/home.html",controller:"HomeCtrl"}).when("/play",{templateUrl:"views/play.html",controller:"PlayCtrl"}).when("/list",{templateUrl:"views/list.html",controller:"ListCtrl"}).otherwise({redirectTo:"/home"})}]).config(["$compileProvider",function(a){a.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/)}]),angular.module("angularApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("angularApp").controller("HomeCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("angularApp").controller("PlayCtrl",["$scope","$http",function(a,b){b.get("http://emergingtech.chariotsolutions.com/category/all-podcasts/techcast/feed/").success(function(b){var c=[];$(b).find("item").each(function(){var a=$(this),b=a.find("title").text(),d=a.find("description").html(),e=a.find("enclosure").attr("url");d=d.replace("<![CDATA[","").replace("]]>",""),c.push({title:b,description:d,enclosure:e})}),a.episodes=c})}]),angular.module("angularApp").controller("ListCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);