'use strict';

/*jslint browser: true, devel: true, unparam: true */

angular.module('angularApp').controller('PlayCtrl', function ($scope, $http) {
  $http.get('http://emergingtech.chariotsolutions.com/category/all-podcasts/techcast/feed/')
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

      $scope.episodes = episodes;
    });
});
