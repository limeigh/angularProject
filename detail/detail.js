(function(angular){
	var app=angular.module('detail',['ngRoute','myService'])
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/detail/:id',{
			templateUrl:'./detail/detail.html',
			controller:'detailController'
		})
	}])
	app.controller('detailController',['$scope','$routeParams','myServiceName',function($scope,$routeParams,myServiceName){
		myServiceName.myJsonp('http://api.douban.com/v2/movie/subject/'+$routeParams.id,{},function(data){
		     $scope.data=data
		     $scope.$apply()
		})
	}])
})(angular)