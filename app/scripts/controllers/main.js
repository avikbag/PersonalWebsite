'use strict';

/**
 * @ngdoc function
 * @name resumeAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resumeAppApp
 */
angular.module('resumeAppApp')
  .controller('MainCtrl', function ($rootScope, $location) {
    $rootScope.loc = $location.absUrl(); // '/Home'
    console.log($rootScope.loc);
    $rootScope.animate = true;
    setTimeout(function(){
      $rootScope.animate = false;
    }, 2500)
  });
