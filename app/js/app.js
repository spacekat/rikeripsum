'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider','$locationProvider', function($routeProvider,locationProvider) {
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');
    $routeProvider.when('/ipsum', {templateUrl: 'partials/ipsum.html', controller: IpsumCtrl});
    $routeProvider.otherwise({redirectTo: '/ipsum'});
  }]);
