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
    .otherwise('/bankrupts');
  }]);
