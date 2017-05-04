(function(angular){
	var app=angular.module('main',['home','detail','in_theaters'])
	app.controller('controller',['$window','$scope','$location',function($window,$scope,$location){
		$scope.hash=$location.url()
		$window.addEventListener('hashchange',function(){
			$scope.hash=$location.url()
			$scope.$apply()
		})
	}])
})(angular)