'use strict';
/*Módulo principal de la aplicación*/
var app = angular.module('IntroAngularjs', [
  'ngRoute',
  'ngAnimate',
  'ngTouch',
  'IntroAngularjs.filters',
  'IntroAngularjs.services',
  'IntroAngularjs.directives',
  'IntroAngularjs.controllers',
  'IntroAngularjs.controllers.principal'
  ]).
//Proveedor de rutas de la aplicación
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'views/home.html', controller: 'Home'});
  $routeProvider.when('/curso', {templateUrl: 'views/curso.html', controller: 'Curso'});
  $routeProvider.when('/acercaDe', {templateUrl: 'views/acercaDe.html', controller: 'AcercaDe'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
/*Código que se ejecuta al iniciar la aplicación, ideal para valores iniciales (no abusar)*/
app.run(["$rootScope", function($rootScope){
  $rootScope.globales = {};
  $rootScope.$on('$routeChangeSuccess', function(){
  });
  $rootScope.$on('$routeChangeStart', function(t) { 
  });
}]);