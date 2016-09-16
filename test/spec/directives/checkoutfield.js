'use strict';

describe('Directive: checkoutField', function () {

  // load the directive's module
  beforeEach(module('pocDynamicFormApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<checkout-field></checkout-field>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the checkoutField directive');
  }));
});
