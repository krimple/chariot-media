'use strict';

angular.module('angularApp')
  .service('tabService', function tabService($rootScope, $location) {
    var implementation = {};
      implementation.currentTab = 'home';

      implementation.switchTab = function(name) {
        if (name === 'home') {
          this.currentTab = 'home';
          $location.path('/home');
        } else if (name === 'list') {
          this.currentTab = 'list';
          $location.path('/list');
        } else if (name === 'play') {
          this.currentTab = 'play';
          $location.path('/play');
        } else {
          // do nothing...
        }
    }

      implementation.tabActive = function(name) {
        return (name === this.currentTab);
      }

    return implementation;
  });
