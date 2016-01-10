
var myAppModule = angular.module('myApp', ['myApp.hello', 'myApp.users']);

/* myAppModule.controller('MainCtrl', function($scope, $http) {
	$scope.name = "initial name";
	$scope.greeting = {id: 100, content: "hello world"};
	

	$scope.update = function() {
		$http.get('greeting', {
			params : {
				name : $scope.name
			}
		}).success(function(data) {
			$scope.greeting = data;
		});
	}
	
	$scope.update2 = function() {
		$http.get('/greeting', {params: {name: $scope.name}})
			.then(function(response) {
				$scope.greeting = response.data;
		});
		
	}
	
});  */
                                                                                   