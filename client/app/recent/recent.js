'use strict';

angular.module('treadNoMongoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('recent', {
        url: '/recent',
        templateUrl: 'app/recent/recent.html',
        controller: 'RecentCtrl'
      });
  });
