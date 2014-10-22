'use strict';

/* Directives */


angular.module('IntroAngularjs.directives', []).
directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}])
/*para realizar un cambio de location cuando se clickea algun elemento*/
.directive('sirGoLocation', ['$location', function($location) {
  return{
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.on('click',function(){
        scope.$apply(function() {
          $location.path(attrs.url);
        });
      });
    }
  };
}])
.directive('onLoad', [function(){
  return {
    template:'',
    scope: {
    },
    link: function(scope, element, attrs){
      var cargando = 
      '<div class="cargando-wrap">\
      <div class="centrar-vertical">\
      <div>\
      <span class="glyphicon glyphicon-list-alt"></span>\
      </div>\
      </div>\
      </div>';
      if (element.find('iframe').length)
      {
        element.append(cargando);
        element.find('iframe').on('load', function(){
          element.children('.cargando-wrap').remove();
        });
      }
    }
  }}]);
