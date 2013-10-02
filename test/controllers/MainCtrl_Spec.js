'use strict';

describe('Unit: Testing Controllers', function () {
  var ctrl, scope;

  beforeEach(angular.mock.module('myApp'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl  = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have a MainCtrl controller', function() {
    expect(scope).not.toBeUndefined();
  });

  it('MainCtrl should extend $scope with listItem', function() {
    expect(scope.listItem).not.toBeUndefined();
  });

  it('MainCtrl listItem should be an array', function() {
    expect(Array.isArray(scope.listItem)).toBeTruthy();
  });

  it('MainCtrl listItem should length of 3', function() {
    expect(scope.listItem.length).toBe(3);
  });

 });
