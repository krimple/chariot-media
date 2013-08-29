'use strict';

describe('Service: TabService', function () {

  // load the service's module
  beforeEach(module('angularApp'));

  // instantiate service
  var TabService;
  beforeEach(inject(function (_TabService_) {
    TabService = _TabService_;
  }));

  it('should do something', function () {
    expect(!!TabService).toBe(true);
  });

});
