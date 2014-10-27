'use strict';
/*Controladores de la aplicación.*/
angular.module('IntroAngularjs.controllers', [])
/*Controlador Home*/
/*Se usa en la sección 'Introducción' de la aplicación*/
/*Se injecta el $scope y el $rootScope.*/
.controller('Home', ['$scope','$rootScope', function($scope,$rootScope) {
  $rootScope.seccionActual = 'Inicio';
}])
/*Controlador Curso*/
/*Se usa en la sección 'AngularJs' de la aplicación*/
/*Se le inyecta el $sce que se utiliza para validar como seguros los url externos
usados para demostraciones de códigos en la aplicación. Sin este servicio, AngularJs
no permite utilizar vínculos externos.*/
.controller('Curso', ['$scope','$rootScope','$sce', function($scope,$rootScope,$sce) {
  $rootScope.seccionActual = 'Curso'; // vista activa en la aplicación.
  $scope.segmentoActivo == 0; // segmento activo para mostrar en la lista de items.
  $scope.activarSegmento = function(i){
    if($scope.segmentoActivo != i)
      $scope.segmentoActivo = i;
    else
      $scope.segmentoActivo = 0; //si el segmento se ecuentra activo, se colapsa
  }
  //Urls externas para usar con la directiva iframeLoader
  $scope.jsFiddles = [
  {nombre:'Data binding', url: 'http://jsfiddle.net/axul/6dx7f96x/embedded/'},
  {nombre:'Controladores', url: 'http://jsfiddle.net/axul/wyzju2pu/2/embedded/'},
  {nombre:'Directivas', url: 'http://jsfiddle.net/axul/xbbde4r5/1/embedded/'},
  {nombre:'Filtros', url: 'http://jsfiddle.net/axul/thdmdagc/1/embedded/'},
  {nombre:'Servicios', url: 'http://jsfiddle.net/axul/1600736w/3/embedded/'}
  ];
}])
/*Controlador AcercaDe*/
/*Usado en la sección 'Acerca de' de la aplicación*/
.controller('AcercaDe', ['$scope','$rootScope', function($scope,$rootScope) {
  $rootScope.seccionActual = 'AcercaDe';
}]);
