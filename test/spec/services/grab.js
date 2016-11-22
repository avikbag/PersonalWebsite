'use strict';

describe('Service: grab', function () {

  // load the service's module
  beforeEach(module('resumeAppApp'));

  // instantiate service
  var grab;
  beforeEach(inject(function (_grab_) {
    grab = _grab_;
  }));

  it('should do something', function () {
    expect(!!grab).toBe(true);
  });

});
