'use strict';

angular.module('app').controller('NavCtrl', ['$interval', function ($interval) {
    var ctrl = this;

    ctrl.init = function () {
        ctrl.getCurrentTime();
        $interval(ctrl.getCurrentTime, 1000);
    };

    ctrl.getCurrentTime = function(){
        var currentTime = Date.now();
        var localDate = new Date(currentTime);
        var hours = localDate.getHours();
        var mins = localDate.getMinutes();
        var sec = localDate.getSeconds();

        ctrl.date = localDate.toDateString();
        ctrl.currentTime = {hours: hours, mins: mins, sec: sec};
    };

}]);