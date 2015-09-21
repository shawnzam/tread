'use strict';

angular.module('treadNoMongoApp')
  .controller('TopCtrl', function ($scope, $firebaseArray) {
    var ref = new Firebase("https://tread.firebaseio.com/trending");
    var TOP = 100;
    $scope.trending = $firebaseArray(ref.orderByChild('votes').limitToLast(TOP));
    ref.orderByChild('votes').limitToLast(TOP).on('value', function (trending) {
      $scope.totalTrends = trending.numChildren();
      $scope.trending = trending.val();
    });
  });
