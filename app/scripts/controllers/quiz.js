
angular
  .module('quizzyApp')
    .controller('QuizCtrl', function ($scope) {
      $scope.quiz =[
      {
        question: "what is your favorite color?"
      },
      {
        question: "what is your favorite animal?", answer: "wolf"
      }
      ]

      $scope.list =[
      {
        correct: "green"
      }
      ]
    });

var answer= function(array){
  for (var i=0; i<array; i++)
  array.forEach(function(answer){

  })
}
