var app = angular.module('MyApp', [])
  .value('version', 'v1.0')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'assets/views/mainView.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
