'use strict';

var helloModule = angular.module('myApp.hello',[]);

helloModule.controller("HelloCtrl", function($scope, $http) {
	$scope.name = "initial name";
	$scope.greeting = {id: 100, content: "hello world"};
	
//	$http.get('greeting', {
//		data : {
//			name : name
//		}
//	}).success(function(data) {
//		$scope.greeting = data;
//	});

	$scope.update = function() {
		$http.get('greeting', {
			params : {
				name : $scope.name
			}
		}).success(function(data) {
			$scope.greeting = data;
		});
	}
});
