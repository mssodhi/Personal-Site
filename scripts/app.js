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
            .when('/education', {
                templateUrl: 'scripts/controllers/education/education.html'
            })
            .when('/about', {
                templateUrl: 'scripts/controllers/about/about.html'
            })
            .otherwise({
                redirectTo: '/deny'
            });
    });

angular.module('app').run(function ($window, $location) {

});