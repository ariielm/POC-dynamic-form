'use strict';

/**
 * @ngdoc directive
 * @name pocDynamicFormApp.directive:checkoutField
 * @description
 * # checkoutField
 */
angular.module('pocDynamicFormApp')
  .directive('checkoutField',['fieldService', function (fieldService) {

    return {
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        element.html(fieldService.getDirectiveContent(scope.field));

        element.on('blur', fieldService.getDirectiveBlur(scope.field));

        //console.log(scope);
        //console.log(element);
        //console.log(attrs);
      }
    };
  }]);
