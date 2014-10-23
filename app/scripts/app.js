'use strict';


// Declare app level module which depends on filters, and services
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
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'views/home.html', controller: 'Home'});
  $routeProvider.when('/curso', {templateUrl: 'views/curso.html', controller: 'Curso'});
  $routeProvider.when('/acercaDe', {templateUrl: 'views/acercaDe.html', controller: 'AcercaDe'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);

app.run(["$rootScope", function($rootScope){
  $rootScope.globales = {};
  $rootScope.$on('$routeChangeSuccess', function(){
  });
  $rootScope.$on('$routeChangeStart', function(t) { 
  });
}]);