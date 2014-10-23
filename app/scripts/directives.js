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
.directive('iframeLoader', ['$sce',function($sce){
  var cargando = 
  '<div class="cargando-wrap animacion animacion-fade" ng-show="mostrarCargando">\
  <div class="centrar-vertical"><div>\
  <span class="glyphicon glyphicon-list-alt animacion-cambiar-color"></span>\
  <br><span>Cargando</span>\
  </div></div>\
  </div>\
  <iframe width="100%" height="300" ng-src="{{urlAprobado}}" allowfullscreen="allowfullscreen" frameborder="0"></iframe>';
  return {
    template: cargando,
    scope: {
      url: "@"
    },
    compile: function(element, attributes){
      return{
        pre: function(scope){
          scope.urlAprobado = $sce.trustAsResourceUrl(scope.url);
       },
        post: function(scope,element,attrs){
          scope.mostrarCargando = true;
          element.find('iframe').on('load', function(){
            scope.mostrarCargando = false;
            scope.$digest();
          });
          element.on('$destroy', function(){

          }); 
        }
      }
    }
  }}]);
