(function(angular){
	var  app = angular.module('myService',[])
	app.service('myServiceName',['$window',function($window){
	        this.myJsonp=function(url,params,fn){
	        var scrip=$window.document.createElement('script')
	        var str='?'
	        for(var k in params){
	            str += k+'='+params[k]+'&'
	        }
	        var funcName='testFunc'+$window.Math.random().toString().substr(2)
	        scrip.src=url+str+'callback='+funcName
	        $window[funcName]=function(data){
	            fn(data)
	        }
	        $window.document.body.appendChild(scrip)
	    }
	}])
})(angular)