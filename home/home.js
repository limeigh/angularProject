(function(angular){
	var app=angular.module('home',['ngRoute'])
	app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
		$routeProvider.when('/home_page',{
			templateUrl:'./home/home.html',
			controller:'homeController'
		})
		$locationProvider.hashPrefix('')
	}])
	app.controller('homeController',['$scope',function($scope){}])
})(angular)