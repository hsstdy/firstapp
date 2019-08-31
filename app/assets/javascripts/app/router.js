angular.module('FirstApp').config([
  "$routeProvider"
  , function(
    $routeProvider
  ) {
    $routeProvider
    .when('/bankrupts', {
      templateUrl: '/templates/bankrupts/index',
      controller: 'BunkruptsIndexController'
    })
    .when('/tools/requests', {
      templateUrl: '/templates/requests/index',
      controller: 'RequestIndexToolController'
    })
    .otherwise('/bankrupts');
  }]);
