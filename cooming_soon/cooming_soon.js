(function(angular){
	var app=angular.module('cooming_soon',['ngRoute'])
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/cooming_soon',{
			templateUrl:'./cooming_soon/cooming_soon.html',
			controller:'cooming_soon_controller'
		})
	}])
	app.controller('cooming_soon_controller',['$scope','$timeout',function($scope,$timeout){
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
        xmlhttp.open("GET","./cooming_soon/data.json",true);
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