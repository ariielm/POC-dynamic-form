'use strict';

/**
 * @ngdoc service
 * @name pocDynamicFormApp.fieldService
 * @description
 * # fieldService
 * Service in the pocDynamicFormApp.
 */
angular.module('pocDynamicFormApp')
  .service('fieldService', function () {

    this.getDirectiveContent = function (field) {
      var html;

      switch (field.name) {
        case 'login':
          html = "<div class='input-group inputGroupEmail'>" +
                    "<input type=" + field.inputType + " name=" + field.name + " id=" + field.name + " class='form-control'/>" +
                    "<div class='input-group-addon'>@zipmail.com.br</div>" +
                  "</div>";
          break;
        default:
          html = "<input type=" + field.inputType+ " class=form-control id=" + field.name + ">";
      }

      return html;
    }

    this.getDirectiveBlur = function (field) {
      function validations() {
        //eval(field.validator);
        console.log('Invocando validation.js que foi definido pelo sales profile: ' + field.validator);
        customValidation(field);
      }

      return validations;
    }

    function customValidation(field) {

      if(field.name == "login") {
        //Chamo serviço de validação de login
        console.log('validando se o login já existe na base');
      }

    }

  });
