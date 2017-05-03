(function(angular){
	var app=angular.module('in_theaters',['ngRoute','myService'])
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/in_theaters',{
			templateUrl:'./in_theaters/in_theaters.html',
			controller:'in_theaters_controller'
		})
	}])
	app.controller('in_theaters_controller',['$scope','$http','$sce','myServiceName','$timeout',function($scope,$http,$sce,myServiceName,$timeout){
    // $scope.data=null
    // $scope.getData=(function(){
    //   var xmlhttp;
    //     if (window.XMLHttpRequest)
    //     {
    //       //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    //       xmlhttp=new XMLHttpRequest();
    //     }
    //     else
    //     {
    //       // IE6, IE5 浏览器执行代码
    //       xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    //     }
    //     xmlhttp.open("GET","./in_theaters/data.json",true);
    //     xmlhttp.send();
    //     xmlhttp.onreadystatechange=function()
    //     {
    //       if (xmlhttp.readyState==4 && xmlhttp.status==200)
    //       {
    //         $timeout(function(){
    //           $scope.data=JSON.parse(xmlhttp.responseText)
    //         })
    //       }
    //     }
    // })()
    // $http.get('./in_theaters/data.json').then(function(res){
    //   // console.log(res.data)
    //   $scope.data=res.data
    // })
        // $scope.url=$sce.trustAsResourceUrl(url)
       // $http.jsonp($sce.trustAsResourceUrl('http://api.douban.com/v2/movie/in_theaters'),{
       //  jsonCallbackParam:'callback'
       // }).then(function(res){
       //   console.log(res)
       // })
       myServiceName.myJsonp('http://api.douban.com/v2/movie/in_theaters',{},function(data){
        // console.log(data)
        // $timeout(function(){
        //    $scope.data=data
        // })
            $scope.data=data
            $scope.$apply()
       })
	}])
})(angular)