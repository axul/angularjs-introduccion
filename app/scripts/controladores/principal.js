'use strict';

/* Controllers */

angular.module('IntroAngularjs.controllers.principal', [])
  .controller('Principal', ['$scope','$rootScope', function($scope,$rootScope) {
      $rootScope.seccionActual = '';
  }])