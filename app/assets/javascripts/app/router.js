angular.module('FirstApp').config([
  "$routeProvider"
  , function(
    $routeProvider
  ) {
    $routeProvider
    .when('/bankrupts', {
      templateUrl: '/templates/bunkrupts/index',
      controller: 'BunkruptsIndexController'
    });
  }]);
