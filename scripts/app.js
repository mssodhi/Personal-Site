'use strict';

angular.module('app', ['ngRoute', 'ngResource', 'ui.bootstrap','angulartics', 'angulartics.google.analytics'])
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
                templateUrl: 'scripts/controllers/projects/projects.html',
                controller: 'ProjectsCtrl',
                controllerAs: 'ctrl'
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