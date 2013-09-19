'use strict';

angular.module('angularApp').controller('ListCtrl',
    function ($scope, $routeParams, $rootScope, tabService, feedLoadService) {
   // parse the podcast either by passed key or global setting

    var podcastKey;

    $rootScope.$on('feed_load_successful', function (event, feedItems) {
      $scope.episodes = feedItems;
    });

    $scope.play = function (episode) {
      console.log(episode);
      tabService.switchTab("play");
      $rootScope.$broadcast("play-episode", episode);
    };

    if ($rootScope.podcastKey !== null) {
      podcastKey = $rootScope.podcastKey;
    } else {
      podcastKey = $routeParams.key;
    }

    if (podcastKey === null) {
      console.error('missing a podcast key');
      return;
    }

    // hack it!
    feedLoadService.loadFeed(podcastKey);

  });
