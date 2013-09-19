'use strict';

/*jslint browser: true, devel: true, unparam: true */
/*global $, angular */

angular.module('angularApp')
  .service('feedLoadService', function feedLoadService($http, $rootScope) {
    var implementation = {};

    implementation.feeds = {

      techcast : {
        logo : 'images/techcast.jpg',
        title : 'Chariot Emerging Tech Cast',
        url   : 'http://emergingtech.chariotsolutions.com/category/all-podcasts/techcast/feed/',
        description : 'The Chariot TechCast - a five-year and running podcast of all things open source.'
      },

      'devnews' : {
        logo : 'images/devnews.jpg',
        title : 'Chariot Developer News',
        url   : 'http://emergingtech.chariotsolutions.com/category/all-podcasts/devnews/feed/',
        description : 'The Chariot Developer News - weekly topics of interest to some of Chariot\'s consultants.'
      },

      'biztech' : {
        logo : 'images/biztech.jpg',
        title : 'Business of Technology Podcast',
        url   : 'http://emergingtech.chariotsolutions.com/category/all-podcasts/biztech/feed/',
        description : 'The Chariot Business of Technology podcast - topics include areas of importance to any IT or business manager focused on technology.'
      },

      'allcasts' : {
        logo : 'images/allcasts.jpg',
        title : 'All Podcasts',
        url   : 'http://emergingtech.chariotsolutions.com/category/all-podcasts/devnews/feed/',
        description : 'The whole feed - every podcast we create. For anyone who loves podcasts.'
      }
    };

    implementation.loadFeed = function (key) {
      var feedDetails = this.feeds[key];
      if (feedDetails === null) {
        return;    // silently fail without loading a feed...
      }

      // if we've cached this podcast feed already, just return it
      if (feedDetails.feedCache !== undefined) {
        $rootScope.$broadcast('feed_load_successful', feedDetails.feedCache);
        return;
      }

      // do not create a concurrency mess...
      if (this.loading === true) {
        return;
      }

      // well anyway, start loading...
      $rootScope.$broadcast('feed_loading');

      $http.get(feedDetails.url)
        .success(function (data, status, headers, config) {
          var episodes = [];
          $(data).find('item').each(function () {
            var el = $(this),
              title = el.find('title').text(),
              description = el.find('content\\:encoded'),
              enclosure = el.find('enclosure').attr('url');

            episodes.push({
              title: title,
              description: description,
              enclosure: enclosure
            });
          });

          // once loaded, add to cache
          feedDetails.feedCache = episodes;

          // let subscriber(s) know we have feed data
          $rootScope.$broadcast('feed_load_successful', episodes);
        })
        .error(function (data, status, headers, config) {
          console.log('error loading feed', feedDetails, data, status, headers, config);
          $rootScope.$broadcast('feed_load_failed', feedDetails);
        });
    };

    return implementation;
  });
