'use strict';

angular.module('angularApp')
  .controller('ListCtrl', function ($scope, $rootScope, tabService, feedLoadService) {
    $rootScope.$on('feed_load_successful', function(event, feedItems) {
      $scope.episodes = feedItems;
    });

    $scope.play = function(episode) {
      console.log(episode);
      tabService.switchTab("play");
      $rootScope.$broadcast("play-episode", episode);
    }

    // hack it!
    feedLoadService.loadFeed(0);
  });
