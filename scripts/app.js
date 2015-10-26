'use strict';

angular.module('app', ['ngRoute', 'ngResource'])
    .config(function ($routeProvider, $httpProvider) {
        //$httpProvider.interceptors.push('AuthenticationInterceptor');
        $routeProvider
            .when('/', {
                templateUrl: 'scripts/controllers/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'ctrl'
            })
            // Route for unauthorized access (When permission is not given to visit a page)
            .when('/deny',
            {
                templateUrl: 'resources/scripts/controllers/deny/deny.html',
                caseInsensitiveMatch: true
            })
            .otherwise({
                redirectTo: '/deny'
            })
        ;
    });

angular.module('app').run(function ($window, $location) {
    //if($window.sessionStorage.getItem('originalUrl')) {
    //    $location.url($window.sessionStorage.getItem('originalUrl'));
    //    delete $window.sessionStorage.originalUrl;
    //}
});