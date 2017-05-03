(function(angular){
	var app=angular.module('in_theaters',['ngRoute'])
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/in_theaters',{
			templateUrl:'./in_theaters/in_theaters.html',
			controller:'in_theaters_controller'
		})
	}])
	app.controller('in_theaters_controller',['$scope','$timeout',function($scope,$timeout){
    $scope.data=null
    $scope.getData=(function(){
      var xmlhttp;
        if (window.XMLHttpRequest)
        {
          //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
          xmlhttp=new XMLHttpRequest();
        }
        else
        {
          // IE6, IE5 浏览器执行代码
          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.open("GET","./in_theaters/data.json",true);
        xmlhttp.send();
        xmlhttp.onreadystatechange=function()
        {
          if (xmlhttp.readyState==4 && xmlhttp.status==200)
          {
            $timeout(function(){
              $scope.data=JSON.parse(xmlhttp.responseText)
            })
          }
        }
    })()
	}])
})(angular)