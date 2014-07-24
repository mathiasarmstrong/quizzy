'use strict';

/**
 * @ngdoc function
 * @name quizzyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quizzyApp
 */
 angular
 .module('quizzyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


