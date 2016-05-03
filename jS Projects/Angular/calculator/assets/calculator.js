(function(){

  //two main parts of angular app
  //app declaration
  var app = angular.module('myCalculator', []);

  //controller             //name
  app.controller('CalculatorController', ['$scope', function($scope){

    //all possible options for lumen selections
    $scope.lumen_options = [375, 600, 900, 1125, 1600];
    //default value for selection
    $scope.current_lumens = 600;
    $scope.current_cost = 12;
    $scope.current_hours = 3;
    $scope.total_days = 365;

    //lumen conversions
    $scope.inc_conversion = .0625;
    $scope.hal_conversion = .0450;
    $scope.cfl_conversion = .0146;
    $scope.led_conversion = .0125;

    $scope.calculate = function(){
      $scope.inc_wattage = ($scope.current_lumens * $scope.inc_conversion).toFixed(1);
      $scope.hal_wattage = ($scope.current_lumens * $scope.hal_conversion).toFixed(1);
      $scope.cfl_wattage = ($scope.current_lumens * $scope.cfl_conversion).toFixed(1);
      $scope.led_wattage = ($scope.current_lumens * $scope.led_conversion).toFixed(1);

      if($scope.current_hours > 24){ $scope.current_hours = 24; }

      var total_hours = $scope.total_days * $scope.current_hours;
      var cost = $scope.current_cost / 100;

      $scope.inc_cost = ((($scope.inc_wattage * total_hours)/ 1000) * cost).toFixed(2);
      $scope.hal_cost = ((($scope.hal_wattage * total_hours)/ 1000) * cost).toFixed(2);
      $scope.cfl_cost = ((($scope.cfl_wattage * total_hours)/ 1000) * cost).toFixed(2);
      $scope.led_cost = ((($scope.led_wattage * total_hours)/ 1000) * cost).toFixed(2);
    }

    $scope.calculate();

  }]);

})();
