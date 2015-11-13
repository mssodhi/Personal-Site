'use strict';

angular.module('app').controller('ProjectsCtrl', ['$scope', '$modal', '$http', function ($scope, $modal, $http) {
    var ctrl = this;

    ctrl.init = function () {
        $http({
            method: 'GET',
            url: 'https://api.github.com/users/mssodhi/repos'
        }).then(function successCallback(response) {
            ctrl.gitRepos = response.data;
        });
    };


    ctrl.openModal = function (project) {
        // Set the current project
        $scope.currentProject = project;

        // Get the date from github and convert it Date String
        var ne = Date.parse(project.updated_at);
        var date = new Date(ne);
        $scope.currentProject.date = date.toDateString();
        $scope.currentProject.time = date.toLocaleTimeString();

        // Open the actual modal.
        ctrl.showModal();
    };

    ctrl.showModal = function () {
        var modalInstance = $modal.open({
            templateUrl: 'scripts/controllers/projects/modal-form.html',
            controller: ModalInstanceCtrl,
            scope: $scope
        });
    };

    var ModalInstanceCtrl = function ($scope, $modalInstance) {
        $scope.cancel = function () {
            $modalInstance.dismiss();
        };
    };

}]);