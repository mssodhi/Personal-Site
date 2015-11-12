'use strict';

angular.module('app', ['ngRoute', 'ngResource'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'scripts/controllers/about/about.html'
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
            .otherwise({
                redirectTo: '/deny'
            });
    });

angular.module('app').run(function ($window, $location) {

});