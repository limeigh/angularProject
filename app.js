(function(angular){
	var app=angular.module('main',['home','in_theaters','cooming_soon','top250'])
	app.controller('controller',['$window','$scope','$location',function($window,$scope,$location){
		$scope.hash=$location.url()
		$window.addEventListener('hashchange',function(){
			$scope.hash=$location.url()
			$scope.$apply()
		})
	}])
})(angular)