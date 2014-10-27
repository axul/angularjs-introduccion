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
/*Directiva iframeLoader*/
/*Se usa para cargar iframes al DOM con un icono de cargando*/
/*@param url: url externo a validar e inyectar en el template que crea un iframe*/
.directive('iframeLoader', ['$sce',function($sce){
  var cargando = 
  '<div class="cargando-wrap animacion animacion-fade" ng-show="mostrarCargando">\
  <div class="centrar-vertical"><div>\
  <span class="glyphicon glyphicon-list-alt animacion-cambiar-color"></span>\
  <br><span>Cargando</span>\
  </div></div>\
  </div>\
  <h4>Código de ejemplo</h4>\
  <iframe width="100%" height="300" ng-src="{{urlAprobado}}" allowfullscreen="allowfullscreen" frameborder="0"></iframe>';
  return {
    template: cargando, //plantilla html a cargar con la directiva
    scope: {
      url: "@" //valor sin two way binding
    },
    compile: function(element, attributes){
      return{
        //Código que se ejecuta antes de la compilación de la plantilla en la directiva
        pre: function(scope){
          scope.urlAprobado = $sce.trustAsResourceUrl(scope.url);
        },
        //Código que se ejecuta posterior a la compilación
        post: function(scope,element,attrs){
          scope.mostrarCargando = true;
          element.find('iframe').on('load', function(){
            scope.mostrarCargando = false;
            scope.$digest();
          });

          //Código a ejecutarse al destruirse la directiva
          element.on('$destroy', function(){

          }); 
        }
      }
    }
  }}])
.directive('sirScroller', ['$timeout',function($timeout){
  return{
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.on('click',function(){
        $timeout(function() {
         var offset = element.position().top;
         var offsetScroll = offset;
         var fix = 50;
         $('body').animate({
          scrollTop: offsetScroll - fix
        }, 200);
       }, 400);
      });
    }
  }
}]);