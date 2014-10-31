'use strict';
/* Filtros */
angular.module('IntroAngularjs.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }])
  .filter('ceroIzq',[function(){
    return function(input){
      return input >= 10 ? input : '0' + input;
    }
  }]);
