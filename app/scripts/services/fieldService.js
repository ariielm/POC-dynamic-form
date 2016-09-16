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
        case 'passwordNew':
          html = "Today is Sunday";
          break;
        default:
          html = "<input type='" + field.inputType+ "' class='form-control' id='" + field.name + "'>";
      }

      return html;
    }

    this.getDirectiveBlur = function (field) {
      //eval(field.validator);
      customValidation(field);
    }

    function customValidation(field) {

      if(field.name == "login") {
        //Chamo serviço de validação de login
        console.log('validando se o login já existe na base');
      }

    }

  });
