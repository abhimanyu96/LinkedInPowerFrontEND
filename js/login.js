(function(){

var app=angular.module('Authentication', ['ngRoute']);
app.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
        // reset login status
        AuthenticationService.ClearCredentials();
 
        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function(flag,token) {
                if(flag==1) {
                    AuthenticationService.SetCredentials($scope.username, token);
                    console.log('ss');
                    $location.path('/');
                } else {
                    $scope.error = 'Invalid username or password';
                    console.log('ee');
                   
                }
            });
        };
    }]);
})();