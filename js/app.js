(function(){

var app=angular.module('login', []);
app.controller('loginController',['$http', function($http){
	this.status={};
	this.data={};
	this.login=function()
	{
		$http.post('http://localhost:8080', this.data )
		.then(this.status='Success',this.status='inValid');
	};
}]);
})();