(function(angular){
	var app=angular.module('top250',['ngRoute'])
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/top250/:page?',{
			templateUrl:'./top250/top250.html',
			controller:'top250_controller'
		}).when('/detail',{
      templateUrl:'./detail/detail.html'
    })
	}])
	app.controller('top250_controller',['$scope','$routeParams','$route','myServiceName',function($scope,$routeParams,$route,myServiceName){
    $scope.pageSize=50
    $scope.page=($routeParams.page || '1')-0
    $scope.getPage=function(nowPage){
       if(nowPage<1 || nowPage>$scope.totalPage){
         return
       }
       $route.updateParams({
         page:nowPage
       })
    }
    myServiceName.myJsonp('http://api.douban.com/v2/movie/top250',{start:($scope.page-1)*$scope.pageSize,count:$scope.pageSize},function(data){
        $scope.data=data
        $scope.totalPage=Math.ceil(data.total/$scope.pageSize)
        $scope.$apply()
     })
  }])
})(angular)