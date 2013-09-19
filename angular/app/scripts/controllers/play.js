'use strict';

/*jslint browser: true, devel: true, unparam: true */

angular.module('angularApp').controller('PlayCtrl', function ($routeParams, $rootScope, $scope, feedLoadService) {

  $rootScope.$on("play-episode", function(event, episode) {
    console.log("Showing episode");
    console.log(episode);
    $rootScope.episode = episode;
    $rootScope.description = episode.description;

  });

});
