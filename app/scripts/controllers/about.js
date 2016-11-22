'use strict';

/**
 * @ngdoc function
 * @name resumeAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the resumeAppApp
 */
angular.module('resumeAppApp')
  .controller('AboutCtrl', function ($rootScope, $location) {
    $rootScope.loc = $location.path(); // '/Home'
    console.log($rootScope.loc, $rootScope.animate);
  });
