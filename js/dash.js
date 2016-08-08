(function(){

var app=angular.module('dash',['ngRoute']);
app.controller('dashController', ['$http', function($http){
	this.data;
	var s=this;
	$http.get('http://localhost:8080/getinfo').then(function successCallback(response){
		s.data=response.data;
		console.log(s.data[0].userId);
	},function errorCallback(response){
		s.data={};
		console.log("err");
	});
}])
})();