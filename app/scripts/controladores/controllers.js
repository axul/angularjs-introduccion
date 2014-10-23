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
  {nombre:'Data binding', url: 'http://jsfiddle.net/axul/6dx7f96x/embedded/'},
  {nombre:'Controladores', url: 'http://jsfiddle.net/axul/wyzju2pu/2/embedded/'},
  {nombre:'Directivas', url: 'http://jsfiddle.net/axul/xbbde4r5/1/embedded/'}
  ];
}])
.controller('AcercaDe', ['$scope','$rootScope', function($scope,$rootScope) {
  $rootScope.seccionActual = 'AcercaDe';
}]);
