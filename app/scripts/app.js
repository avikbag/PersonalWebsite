'use strict';

/**
 * @ngdoc overview
 * @name resumeAppApp
 * @description
 * # resumeAppApp
 *
 * Main module of the application.
 */
angular
  .module('resumeAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch', 
    'ngMaterial'
  ])
  .config(function ($mdThemingProvider){
    // If you specify less than all of the keys, it will inherit from the
    // default shades
    $mdThemingProvider.definePalette('custom', {
    '50': 'rgba(84, 110, 122, 0.25)',
    '100': 'rgba(84, 110, 122, 0.15)',
    '200': 'rgba(32, 40, 122, 0.75)',
    '300': 'e57373',
    '400': 'ef5350',
    '500': 'f44336',
    '600': 'e53935',
    '700': 'd32f2f',
    '800': 'c62828',
    '900': 'b71c1c',
    'A100': 'ff8a80',
    'A200': 'ff5252',
    'A400': 'ff1744',
    'A700': 'd50000',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });
    $mdThemingProvider.theme('default')
    .primaryPalette('orange', {
      'default': '800'
    })
    .backgroundPalette('custom', {
      'default': '50', // use shade 200 for default, and keep all other shades the same
      'hue-1': '100',
      'hue-2': '200'
    });
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/exp', {
        templateUrl: 'views/exp.html',
        controller: 'ExpCtrl',
        controllerAs: 'exp'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
