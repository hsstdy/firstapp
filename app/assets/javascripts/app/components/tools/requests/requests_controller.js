angular.module('FirstApp')
.controller('RequestIndexToolController', [
  '$scope'
  , 'RequestResourceService'
  , function(
    $scope
  , RequestResourceService
  ) {
    $scope.clickDraw = function() {
      console.log($scope.fromDate);
      console.log($scope.toDate);
      var params = {
        fromDate: $scope.fromDate,
        toDate: $scope.toDate
      }
      RequestResourceService.count_by_date(params, function() {
        drawChart(Object.keys(data), Object.values(data));
      });
    }
    /**
     *
     */
    var drawChart = function(label, data) {
      $('#chart').remove();
      $('#chart-container').append("<canvas id='chart'></canvas>");
      var ctx = document.getElementById('chart').getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: label,
          datasets: [
            {
              label: 'リクエスト回数',
              data: data,
              borderColor: 'rgba(40, 71, 153, 0.8)',
              backgroundColor: 'rgba(40, 71, 153, 0.1)',
              fill: false,
              pointRadius: 0
            },
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          aspectRatio: 1,
          scales: {
            yAxes: [{
              ticks: {
              }
            }]
          }
        }
      });
    }
  }
])
