/*global angular */

var cardAppControllers = (function () {
    'use strict';
    var cardAppControllers = angular.module('cardAppControllers', []);

    // Declare application controller and inject scope reference.
    cardAppControllers.controller('AppCtrl', ['$scope', function ($scope) {
        // Define the title model.
        $scope.title = "AngularJS Tutorial";
    }]);
    // Declare the controller that populates 'list.html' with data and inject the scope.
	// Inject the scope and new cardService reference into the controller.
	cardAppControllers.controller('ListCtrl', ['$scope', 'cardService',
                              function ($scope, cardService) {
                                  // Define the cards model.					  
                                  cardService.getCards($scope);
                              }]);
	// Inject scope, $routeParams, and cardService  
	cardAppControllers.controller('DetailCtrl', ['$scope', '$routeParams', 'cardService',
		function ($scope, $routeParams, cardService) {
			cardService.getCard($scope, $routeParams.numberID, $routeParams.suitID);
		}]);
							  
    return cardAppControllers;
}());
