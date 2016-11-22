'use strict';

/**
 * @ngdoc service
 * @name resumeAppApp.grab
 * @description
 * # grab
 * Factory in the resumeAppApp.
 */
angular.module('resumeAppApp')
  .factory('grab', function ($http) {
    // Public API here
    return {
      fetch: function (dir) {
        return $http.get(dir);
      }
    };
  });
