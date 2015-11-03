'use strict';

angular.module('app', ['ngRoute', 'ngResource'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'scripts/controllers/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'homeCtrl'
            })
            .when('/deny',
            {
                templateUrl: 'scripts/controllers/deny/deny.html',
                caseInsensitiveMatch: true
            })
            .when('/projects', {
                templateUrl: 'scripts/controllers/projects/projects.html'
            })
            .otherwise({
                redirectTo: '/deny'
            });
    });

angular.module('app').run(function ($window, $location) {

});