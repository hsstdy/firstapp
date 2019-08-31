angular.module('FirstApp')
  .controller('BunkruptsIndexController', [
    '$scope'
    , function(
      $scope
    ) {
      $scope.clickRun = function() {
        console.log($scope.winRate)
        console.log($scope.averageGain)
        console.log($scope.averageLoss)
        console.log($scope.bankruptsAt)
      }
    }]
  );
