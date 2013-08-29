'use strict';

/*jslint browser: true, devel: true, unparam: true */
/*global $, angular */

angular.module('angularApp')
  .service('feedLoadService', function feedLoadService($http, $rootScope) {
    var implementation = {}, loading = false;

    implementation.feeds = [
      {
        title : "TechCast",
        url   : "http://emergingtech.chariotsolutions.com/category/all-podcasts/techcast/feed/",
        description : "The Chariot TechCast - a five-year and running podcast of all things open source."
      },

      {
        title : "DevNews",
        url   : "http://emergingtech.chariotsolutions.com/category/all-podcasts/devnews/feed/",
        description : "The Chariot Developer News - weekly topics of interest to some of Chariot's consultants."
      }
    ];

    implementation.loadFeed = function (feedIndex) {
      var feedDetails;
      if (feedIndex < 0 || feedIndex >= this.feeds.length - 1) {
        return;    // silently fail without loading a feed...
      }
      feedDetails = this.feeds[feedIndex];


      // if we've cached this podcast feed already, just return it
      if (feedDetails.feedCache !== undefined) {
        $rootScope.$broadcast("feed_load_successful", feedDetails.feedCache);
        return;
      }

      var instance = this;
      // do not create a concurrency mess...
      if (this.loading === true) {
        return;
      }

      // well anyway, start loading...
      $rootScope.$broadcast("feed_loading");

      $http.get(feedDetails.url)
        .success(function (data, status, headers, config) {
          var episodes = [];
          $(data).find('item').each(function () {
            var el = $(this),
              title = el.find('title').text(),
              description = el.find('description').html(),
              enclosure = el.find('enclosure').attr('url');
            description = description.replace('<![CDATA[', '').replace(']]>', '');

            episodes.push({
              title: title,
              description: description,
              enclosure: enclosure
            });
          });

          // once loaded, add to cache
          feedDetails.feedCache = episodes;

          // let subscriber(s) know we have feed data
          $rootScope.$broadcast("feed_load_successful", episodes);
        })
        .error(function (data, status, headers, config) {
          console.log("error loading feed", feedDetails, data, status, headers, config);
          $rootScope.$broadcast("feed_load_failed", feedDetails);
        });

    };

    return implementation;
  });
