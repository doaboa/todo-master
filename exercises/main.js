//create an app, dependencies go in [], currently none
var firstApp = angular.module('firstApp', []);

//give app a factory to pull from, name it and put data in function
firstApp.factory('Data', function() {
	return {message:"I'm data from a service"}
})

//scope is always a dependency, also list factory as dependency
function FirstCtrl($scope, Data) {
	$scope.data = Data;
}

function SecondCtrl($scope, Data) {
	$scope.data = Data;

	$scope.backwardsMsg = function (message) {
		return message.split("").reverse().join("");
	}
}