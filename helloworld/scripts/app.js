(function () {
	'use strict';
	angular.module('helloWorld', [])
		.controller('HelloWorldController', HelloWorldController);

	HelloWorldController.$inject = ['$scope'];
	//this is a test
	//this is a second test
	function HelloWorldController ($scope) {
		$scope.text = "Hello World!";	
	}
})();