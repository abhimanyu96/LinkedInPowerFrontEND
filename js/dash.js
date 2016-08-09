(function(){

var app=angular.module('dash',['ngRoute']);
app.controller('dashController', ['$http' , '$location', function($http,$location){
	this.data;
	var s=this;
	$http.get('http://localhost:8080/getinfo').then(function successCallback(response){
		s.data=response.data;
		console.log(s.data[0].userId);
	},function errorCallback(response){
		s.data={};
		console.log("err");
	});
	this.logout = function()
	{
		console.log("loggin out");
		$location.path('/login');
	};
}]);
app.config(['$locationProvider',function($locationProvider) {
	$locationProvider.html5Mode(false);
}]);
})();