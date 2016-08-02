(function(){

var app=angular.module('bigmod', ['login','ngRoute','ngCookies']);
app.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/login',{
		templateUrl:'templates/login.html'
	})
	.when('/',{
		templateUrl:'templates/dash.html'
	}).otherwise({ redirectTo:'/login'});
}]);
app.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);
})();