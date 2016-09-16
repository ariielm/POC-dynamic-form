'use strict';

/**
 * @ngdoc function
 * @name pocDynamicFormApp.controller:CheckoutCtrl
 * @description
 * # CheckoutCtrl
 * Controller of the pocDynamicFormApp
 */
angular.module('pocDynamicFormApp')
  .controller('CheckoutCtrl', ['$scope', function ($scope) {

    var self = this;
    this.currentStep = 1;
    this.sessionFields = [
      {
        "name":"login",
        "mandatory":true,
        "visible":true,
        "type":"java.lang.String",
        "depends":[],
        "validator":"UOL.platform.fields.email.check",
        "label": "E-mail",
        "inputType": "email",
        "help": "abc123@zipmail.com.br",
        "step": 1
      },
      {
        "name":"passwordNew",
        "mandatory":true,
        "visible":true,
        "type":"java.lang.String",
        "depends":[
          "passwordNew",
          "login"
        ],
        "validator":"UOL.platform.fields.password.checkPassword",
        "label": "Senha",
        "inputType": "password",
        "help": "De 8 à 16 caracteres.",
        "step": 1
      },
      {
        "name":"individualName",
        "mandatory":true,
        "visible":true,
        "type":"java.lang.String",
        "depends":[],
        "validator":"UOL.platform.fields.individualFullName.check",
        "label": "Nome",
        "inputType": "text",
        "help": "",
        "step": 2
      },
      {
        "name":"mobilePhoneNumber",
        "mandatory":true,
        "visible":true,
        "type":"java.lang.String",
        "depends":[
          "mobilePhoneDDD",
          "mobilePhoneNumber"
        ],
        "validator":"UOL.platform.fields.cellphone.check",
        "label": "Celular",
        "inputType": "text",
        "help": "(99) 99999-9999",
        "step": 3
      }
    ];

    this.refreshFields = function () {
      $scope.fields = getFieldsFromCurrentStep();
    };

    $scope.isLastStep = false;

    $scope.fields = getFieldsFromCurrentStep();

    $scope.nextStep = function () {
      if (!isLastStep()) {
        self.currentStep++;
        self.refreshFields();
        if (isLastStep()){
          $scope.isLastStep = true;
        }
      }
    };

    function isLastStep() {
      return self.currentStep >= self.sessionFields[self.sessionFields.length-1].step;
    }

    function getFieldsFromCurrentStep() {
      var fields = [];
      for (var i = 0; i < self.sessionFields.length; i++) {
        if (self.sessionFields[i].step == self.currentStep) {
          fields.push(self.sessionFields[i]);
        }
      }
      return fields;
    }

    $scope.submit = function () {
      console.log($scope.checkoutForm);
    };

  }]);
