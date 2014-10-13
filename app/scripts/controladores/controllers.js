'use strict';

/* Controllers */

angular.module('IntroAngularjs.controllers', [])
.controller('Home', ['$scope','$rootScope', function($scope,$rootScope) {
  $rootScope.seccionActual = 'Inicio';
}])
.controller('Curso', ['$scope','$rootScope', function($scope,$rootScope) {
  $rootScope.seccionActual = 'Curso';
}]);
