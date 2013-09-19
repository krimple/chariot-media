'use strict';

angular.module('angularApp')
  .controller('HomeCtrl', function ($scope, $rootScope, $location) {
    
    $scope.podcast = function (key){

        $rootScope.podcast = key;
        $location.path("/play/key"); 

    }

  });
