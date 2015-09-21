'use strict';

angular.module('treadNoMongoApp')
  .controller('RecentCtrl', function ($scope, $firebaseArray) {
    var ref = new Firebase("https://tread.firebaseio.com/trending");
    var TOP = 100;
    var MORE_MODIFIER = 24*60*60*1000;
    $scope.timeAgo = new Date().getTime()- MORE_MODIFIER;
    var agoref = ref.orderByChild('created_at').startAt($scope.timeAgo).endAt(new Date().getTime()).limitToLast(TOP);
    $scope.trending = $firebaseArray(agoref);
    agoref.on('value', function (trending) {
      $scope.totalTrends = trending.numChildren();
      $scope.trending = trending.val();
    });
    $scope.showMore = function () {
      $scope.timeAgo -= MORE_MODIFIER;
      $scope.trending = $firebaseArray( ref.orderByChild('created_at').startAt($scope.timeAgo).limitToLast(TOP));
    }
  });
