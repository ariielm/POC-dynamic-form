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

    function refreshFields() {
      $scope.fields = getFieldsFromCurrentStep();
    }

    $scope.isFirstStep = isFirstStep();
    $scope.isLastStep = isLastStep();

    $scope.fields = getFieldsFromCurrentStep();

    $scope.previousStep = function () {
      if (!isFirstStep()) {
        self.currentStep--;
        refreshFields();
        $scope.isLastStep = false;
        $scope.isFirstStep = isFirstStep();
      }
    };

    $scope.nextStep = function () {
      if (!isLastStep()) {
        self.currentStep++;
        $scope.isFirstStep = false;
        refreshFields();
        $scope.isLastStep = isLastStep();
      }
    };

    function isFirstStep() {
      return self.currentStep <= self.sessionFields[0].step;
    }

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

    $(".alert").removeClass("in").hide();

    $scope.submit = function () {
      $(".alert").removeClass("in").show();
      $(".alert").delay(200).addClass("in").fadeOut(2500);
    };

  }]);
