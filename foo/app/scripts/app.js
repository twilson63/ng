var app = angular.module('foo', [])
  .config(function($routeProvider){
    $routeProvider
      .when('/', { controller: 'Index', templateUrl: '/app/views/index.html' });
  });
  