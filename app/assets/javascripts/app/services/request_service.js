angular.module('FirstApp')
  .service('RequestResourceService', [
    '$http'
    , '$filter'
    ,function(
      $http
      , $filter
    ) {
      this.create = function(page) {
        var data = {
          request: {
            page: page,
            requested: $filter('date')(Date.now(), 'yyyy-MM-ddTHH:MM:ssZ')
          }
        }
        $http({
          method: 'POST',
          url: 'requests/create',
          data: data
        }).then(
          function(success) {
            var success = success.data.success;
          },
          function(error) {
            console.log(error);
          });
      }
    }]);
