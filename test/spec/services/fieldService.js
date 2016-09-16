'use strict';

describe('Service: fieldService', function () {

  // load the service's module
  beforeEach(module('pocDynamicFormApp'));

  // instantiate service
  var fieldService;
  beforeEach(inject(function (fieldService) {
    fieldService = fieldService;
  }));

  it('should do something', function () {
    expect(!!fieldService).toBe(true);
  });

});
