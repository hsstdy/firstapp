angular.module('FirstApp')
.controller('RequestIndexToolController', [
  '$scope'
  , function(
    $scope
  ) {
    $scope.clickDraw = function() {
      console.log($scope.fromDate);
      console.log($scope.toDate);
    }
  }
])
