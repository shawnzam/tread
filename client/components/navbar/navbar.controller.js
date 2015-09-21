'use strict';

angular.module('treadNoMongoApp')
  .controller('NavbarCtrl', function ($scope) {
    $scope.menu = [{
      'title': 'Top Trending',
      'state': 'top'
    },
      {
        'title': 'Recent Trending',
        'state': 'recent'
      }];

    $scope.isCollapsed = true;
  });
