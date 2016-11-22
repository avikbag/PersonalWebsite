'use strict';

describe('Controller: ExpCtrl', function () {

  // load the controller's module
  beforeEach(module('resumeAppApp'));

  var ExpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExpCtrl = $controller('ExpCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExpCtrl.awesomeThings.length).toBe(3);
  });
});
