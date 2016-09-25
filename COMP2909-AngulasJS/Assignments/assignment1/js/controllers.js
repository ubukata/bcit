/*global angular */

var weatherControllers = (function () {
    var weatherControllers = angular.module('weatherControllers', []);
	
    // Declare application controller and inject the scope reference.
    weatherControllers.controller('AppCtrl', ['$scope', 'weatherService', function ($scope, weatherService) {
        // Define default temperature type
		$scope.temperatureType = "F";
    }]);
	
    // Inject the scope and new weatherService reference into the controller.
    weatherControllers.controller('WeatherCtrl', ['$scope', 'weatherService',
                                  function ($scope, weatherService) {
									// Define the forecast data.					  
									weatherService.getWeather($scope);
									// Method to convert the temperature (F to C)
									$scope.changeTemperatureScale = function (scale) {
										weatherService.getWeather($scope, scale);
									}
									
									if($scope.forecast.length > 0){
										var date = new Date($scope.forecast[0].date);
										var monthsShortNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
										$scope.actualDate = `${monthsShortNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
									}
                                  }]);
								  
    // Inject the scope and new weatherService reference into the controller.
    weatherControllers.controller('AboutCtrl', ['$scope', 
                                  function ($scope) {

                                      
                                  }]);
								  
    return weatherControllers;
}());
