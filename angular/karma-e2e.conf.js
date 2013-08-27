'use strict';

module.exports = function(config) {

  config.set({
    basePath : '',
    frameworks : ['ng-scenario'],
    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/underscore/underscore.js',
      'app/scripts/*.js',
      'app/scripts/**/*.js',
      'test/e2e/**/*.js'
    ],
    autoWatch : false,
    reporters : ['progress', 'dots', 'growl'],
    browsers : ['PhantomJS'],
    singleRun : true,
    proxies : {
      '/': 'http://localhost:9000/'
    },
    urlRoot: '/_karma_/'
  });
};
