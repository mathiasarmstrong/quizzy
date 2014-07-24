'use strict';

/**
 * @ngdoc function
 * @name quizzyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the quizzyApp
 */
angular
.module('quizzyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
