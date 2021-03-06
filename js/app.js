(function(){

var app=angular.module('bigmod', ['Authentication','ngRoute','ngCookies','dash']);
app.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/login',{
		templateUrl:'templates/login.html'
	})
	.when('/',{
		templateUrl:'templates/dash.html'
	}).otherwise({ redirectTo:'/'});
}]);
app.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.token) {
            $http.defaults.headers.common['Authorization'] = $rootScope.globals.token; // jshint ignore:line

        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.token) {
                $location.path('/login');
            }
        });
    }]);
})();