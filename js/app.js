(function(){

var app=angular.module('login', []);
app.controller('loginController',['$http', function($http){
	this.status='';
	this.data={};
	var s=this;
	this.token='';;
	this.login=function()
	{
		$http.post('http://localhost:8080', s.data )
		.then(function successCallback(response){
			console.log('sjdnsjd');
			s.status=response.statusText;
			s.token=response.data.token;
			}
			,function errorCallback(response){
				console.log('jndjnsd' + response);
			 s.status='Invalid Username or Password';});
	};
}]);
})();