'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');
    $routeProvider
      .when('/', {
        templateUrl: 'partials/ipsum.html',
        controller: 'IpsumCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
