'use strict';

angular.module('treadNoMongoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'app/top/top.html',
        controller: 'TopCtrl'
      });
  });
