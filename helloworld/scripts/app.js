(function () {
	'use strict';
	angular.module('helloWorld', [])
		.controller('HelloWorldController', HelloWorldController);

	HelloWorldController.$inject = ['$scope'];
	//this is a test
	function HelloWorldController ($scope) {
		$scope.text = "Hello World!";	
	}
})();