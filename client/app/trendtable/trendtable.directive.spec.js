'use strict';

describe('Directive: trendtable', function () {

  // load the directive's module and view
  beforeEach(module('treadNoMongoApp'));
  beforeEach(module('app/trendtable/trendtable.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<trendtable></trendtable>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the trendtable directive');
  }));
});
