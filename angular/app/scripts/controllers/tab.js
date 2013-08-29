'use strict';

angular.module('angularApp').controller('tab', function ($scope, tabService) {
    $scope.switchTab = function(name) {
      tabService.switchTab(name);
    };

    $scope.tabActive = function(name) {
      if (tabService.tabActive(name) == true) {
        return " active ";

      } else {
        return "";
      }
    };
  });
