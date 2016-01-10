'use strict';

var usersModule = angular.module('myApp.users', []);

usersModule.controller("UsersCtrl", function($scope, $http) {
	$http.get("/users").then(function(response) {
		$scope.users = response.data;
	});

	$scope.regenerateUsers = function() {
		$http.get("/users", {
			params : {
				number : $scope.number
			}
		}).then(function(response) {
			$scope.users = response.data;
		})
	}
});
