'use strict';

describe('Service: feedLoadService', function () {

  // load the service's module
  beforeEach(module('angularApp'));

  // instantiate service
  var feedLoadService;
  beforeEach(inject(function (_feedLoadService_) {
    feedLoadService = _feedLoadService_;
  }));

  it('should skip loading feeds if the index < 0', function () {
    feedLoadService.loadFeed(-1);
    expect(feedLoadService.loading).toBe(false);
    expect(feedLoadService.feedData).toBe([]);
    feedLoadService.loadFeed(999);
  });

  it('should skip loading feeds if the index > length - 1', function () {
    feedLoadService.loadFeed(999);
    expect(feedLoadService.loading).toBe(false);
    expect(feedLoadService.feedData).toBe([]);
    feedLoadService.loadFeed(999);
  });

});
