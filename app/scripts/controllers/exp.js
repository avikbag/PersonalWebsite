'use strict';

/**
 * @ngdoc function
 * @name resumeAppApp.controller:ExpCtrl
 * @description
 * # ExpCtrl
 * Controller of the resumeAppApp
 */
angular.module('resumeAppApp')
  .controller('ExpCtrl', function ($rootScope, $scope, $location, grab) {
    $rootScope.loc = $location.path(); // '/Home'
    console.log($scope.loc);

    $scope.names = [];
    $scope.urls = [];
    $scope.lang = [];
    $scope.map = {'C++': 'cplusplus',
                  'Python': 'python',
                  //'Makefile': 'makefile',
                  'Angularjs': 'angularjs',
                  'HTML': 'html5',
                  'CSS': 'css3',
                  'JavaScript': 'angularjs',
                  'C': 'c'};
    //console.log(Object.keys($scope.map).indexOf('JavaScript2') != -1)
    $scope.filterFn = function(wrd){
      if (Object.keys($scope.map).indexOf(wrd) == -1){
        return false;
      }
      return true;
    };
    $scope.filterFnI = function(wrd){
      if (Object.keys($scope.map).indexOf(wrd) == -1){
        return true;
      }
      return false;
    };
    var address = 'https://api.github.com/users/avikbag/repos';
    grab.fetch(address).then(function(msg){
      var dataset = msg.data;
      for(var i = 0; i < dataset.length; i++){
        $scope.names.push(dataset[i].name);
        $scope.urls.push(dataset[i].html_url);
        
        grab.fetch(dataset[i].url+'/languages').then(function(res){
          $scope.lang.push(Object.keys(res.data));
        });
      }
    });

  });
