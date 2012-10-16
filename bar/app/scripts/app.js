var bar = angular.module('bar', [])
  .config(function($routeProvider){
    $routeProvider
      .when('/', { controller: 'Index', templateUrl: '/app/views/index.html' });
  });
  