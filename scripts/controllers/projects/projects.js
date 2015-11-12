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
        $scope.currentProject = project;
        ctrl.showForm();
    };

    ctrl.showForm = function () {
        var modalInstance = $modal.open({
            templateUrl: 'scripts/controllers/projects/modal-form.html',
            controller: ModalInstanceCtrl,
            scope: $scope
        });
    };

    var ModalInstanceCtrl = function ($scope, $modalInstance) {
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };


    //ctrl.googleChartsStuff = function () {
    //        setTimeout(function(){google.load('visualization', '1', {'callback':'', 'packages':['corechart']})}, 0);
    //
    //        //google.load("visualization", "1", {packages:["corechart"]});
    //        google.setOnLoadCallback(drawChart);
    //        function drawChart() {
    //            var data = google.visualization.arrayToDataTable([
    //                ['Age', 'Weight'],
    //                [ 8,      12],
    //                [ 4,      5.5],
    //                [ 11,     14],
    //                [ 4,      5],
    //                [ 3,      3.5],
    //                [ 6.5,    7]
    //            ]);
    //
    //            var options = {
    //                title: 'Age vs. Weight comparison',
    //                hAxis: {title: 'Age', minValue: 0, maxValue: 15},
    //                vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
    //                legend: 'none'
    //            };
    //
    //            var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
    //
    //            chart.draw(data, options);
    //        }
    //};


}]);