'use strict';

/* Controllers */

angular.module('IntroAngularjs.controllers', [])
.controller('Home', ['$scope','$rootScope', function($scope,$rootScope) {
  $rootScope.seccionActual = 'Inicio';
}])
.controller('Curso', ['$scope','$rootScope','$sce', function($scope,$rootScope,$sce) {
  $rootScope.seccionActual = 'Curso';
  $scope.segmentoActivo == 0;
  $scope.activarSegmento = function(i){
    $scope.segmentoActivo = i;
  }
  $scope.jsFiddles = [
  {url: 'http://jsfiddle.net/axul/x55kau48/3/embedded/'}
  ];
}])
.controller('AcercaDe', ['$scope','$rootScope', function($scope,$rootScope) {
  $rootScope.seccionActual = 'AcercaDe';
}]);
