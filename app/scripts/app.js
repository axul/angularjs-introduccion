'use strict';


// Declare app level module which depends on filters, and services
angular.module('IntroAngularjs', [
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
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
