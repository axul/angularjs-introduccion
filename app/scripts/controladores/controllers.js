'use strict';

/* Controllers */

angular.module('IntroAngularjs.controllers', [])
.controller('Home', ['$scope','$rootScope', function($scope,$rootScope) {
  $rootScope.seccionActual = 'Inicio';
}])
.controller('Curso', ['$scope','$rootScope', function($scope,$rootScope) {
  $rootScope.seccionActual = 'Curso';
  $scope.segmentoActivo == 0;
  $scope.activarSegmento = function(i){
    $scope.segmentoActivo = i;
  }
  
}])
.controller('AcercaDe', ['$scope','$rootScope', function($scope,$rootScope) {
  $rootScope.seccionActual = 'AcercaDe';
}]);
