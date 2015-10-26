'use strict';

angular.module('app', ['ngRoute', 'ngResource'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'scripts/controllers/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'ctrl'
            })
            .when('/deny',
            {
                templateUrl: 'scripts/controllers/deny/deny.html',
                caseInsensitiveMatch: true
            })
            .otherwise({
                redirectTo: '/deny'
            });
    });

angular.module('app').run(function ($window, $location) {

});