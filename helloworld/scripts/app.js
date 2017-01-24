(function () {
	'use strict';
	angular.module('helloWorld', [])
		.controller('HelloWorldController', HelloWorldController);

	HelloWorldController.$inject = ['$scope'];

	function HelloWorldController ($scope) {
		$scope.text = "Hello World!";	
	}
})();