//create an app, dependencies go in [], currently none
var firstApp = angular.module('firstApp', []);

//give app a factory to pull from, name it and put data in function. this is a service
firstApp.factory('Data', function() {
	return {message:"I'm data from a service"}
})

//first line names filter and (Data) is designated if we want to inject
firstApp.filter('mirror', function(Data) {
	//takes input of the filter
	return function(text) {
		//this is what the filter actually does, plus injected info
		return text.split("").reverse().join("") + " " + Data.message;
	}
})

//scope is always a dependency, also list factory as dependency
function FirstCtrl($scope, Data) {
	$scope.data = Data;
}

function SecondCtrl($scope, Data) {
	$scope.data = Data;

	// a filter replaces the logic below to make it more reusable
	// $scope.backwardsMsg = function (message) {
	// 	return message.split("").reverse().join("");
	// }
}