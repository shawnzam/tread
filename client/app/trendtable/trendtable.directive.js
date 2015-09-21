'use strict';

angular.module('treadNoMongoApp')
  .directive('trendtable', function ($timeout) {
    return {
      templateUrl: 'app/trendtable/trendtable.html',
      restrict: 'EA',
      scope: {
        trends: '=',
        trendLength: '@',
        mySortBy: '&',

      },
      link: function (scope, element, attrs) {
        scope.selected = {};
        scope.beenVotedOn = function (key) {

          if(scope.selected.key === key){
            return scope.selected.up ? 'up' : 'down';
          }
        }
        scope.vote = function (up,key) {
          scope.selected = {key: key, up: up};
          $timeout(function () {
            scope.selected = {};
          }, 4000);
          var key = encodeURIComponent(key).replace(/\./g, '%2E');
          var trndRef = new Firebase("https://tread.firebaseio.com/trending/" + key);
          trndRef.transaction(function (currentValue) {
            if(currentValue.votes === null){
              up ? currentValue.votes = 1 : currentValue.votes = 0;
              return currentValue;
            }
            currentValue.votes = up ? currentValue.votes+1 : currentValue.votes-1;
            return currentValue;
          }, function (error, committed, snapshot) {
            new Firebase("https://tread.firebaseio.com/trending/" + key).setWithPriority(snapshot.val(), snapshot.val().votes );
          })
        }
      }

    };
  });
