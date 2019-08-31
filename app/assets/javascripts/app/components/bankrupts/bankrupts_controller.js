angular.module('FirstApp')
  .controller('BunkruptsIndexController', [
    '$scope'
    , 'RequestResourceService'
    , function(
      $scope
      , RequestResourceService
    ) {
      var SIMULATE_TERM = 100;
      $scope.load = function() {
        $scope.winRate = 50;
        $scope.averageGain = 5;
        $scope.averageLoss = 3;
        $scope.bankruptsAt = 10;
      }
      $scope.clickRun = function() {
        console.log($scope.winRate)
        console.log($scope.averageGain)
        console.log($scope.averageLoss)
        console.log($scope.bankruptsAt)
        $scope.result = "";
        var samples = [];
        for (let i=0;i<100;i++) {
          samples.push(simulate());
        }
        var aves = [];
        var band_tops = [];
        var band_bottoms = [];
        for (let i=0;i<SIMULATE_TERM;i++) {
          var sum = 0;
          for (let j=0;j<100;j++) {
            sum += samples[j][i];
          }
          var ave = sum / 100;
          var dev = 0;
          for (let j=0;j<100;j++) {
            let diff = samples[j][i] - ave;
            dev += diff * diff;
          }
          dev = Math.sqrt(dev / 100);
          aves.push(ave);
          band_tops.push(ave + dev);
          band_bottoms.push(ave - dev);
        }
        drawChart(getLabel(), aves, band_tops, band_bottoms);
        // calc Bankrupt
        var bankruptCount = 0;
        for (let j=0; j<100; j++) {
          var bankrupt = samples[j].find(function(sample) {
            return sample <= $scope.bankruptsAt;
          });
          if (bankrupt) {
            bankruptCount += 1;
          }
        }
        $scope.result = bankruptCount;
        RequestResourceService.create('bankrupts/index');
      }
      /**
       *
       */
      var simulate = function() {
        var assets = 100;
        var growth = $scope.averageGain / 100 + 1;
        var decline = - $scope.averageLoss / 100 + 1;
        var data = [assets];
        var t = 1 - $scope.winRate / 100;
        for (let i=1; i < SIMULATE_TERM; i++) {
          var r = Math.random()
          if (r > t) {
            assets *= growth;
          } else if (r < t) {
            assets *= decline;
          }
          data[i] = assets;
        }
        return data;
      }
      /**
       *
       */
      var getLabel = function() {
        var interval = SIMULATE_TERM / 10;
        var result = Array(SIMULATE_TERM);
        result.fill("");
        for (let i=1;i <= 10; i++) {
          result[i * interval - 1] = ( i * interval ).toString();
        }
        return result;
      }
      /**
       *
       */
      var drawChart = function(label, data, band_tops, band_bottoms) {
        $('#chart').remove();
        $('#myChart').append("<canvas id='chart'></canvas>");
        var ctx = document.getElementById('chart').getContext('2d');
        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: label,
            datasets: [
              {
                label: '資産(平均)',
                data: data,
                borderColor: 'rgba(40, 71, 153, 0.8)',
                backgroundColor: 'rgba(40, 71, 153, 0.1)',
                fill: false,
                pointRadius: 0
              },
              {
                label: '+1σ',
                data: band_tops,
                borderColor: 'rgba(40, 71, 153, 0.4)',
                backgroundColor: 'rgba(40, 71, 153, 0.1)',
                fill: false,
                pointRadius: 0
              },
              {
                label: '-1σ',
                data: band_bottoms,
                borderColor: 'rgba(40, 71, 153, 0.4)',
                backgroundColor: 'rgba(40, 71, 153, 0.1)',
                fill: false,
                pointRadius: 0
              }
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
    }]
  );
