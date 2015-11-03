'use strict';

angular.module('app').controller('HomeCtrl', function () {
    var ctrl = this;

    ctrl.messages = [
        {text:"Standard Message"},
        {text:"Success Message!", type:"success"},
        {text:"Alert Message!", type : "alert"},
        {text:"secondary message...", type : "secondary"}
    ]
});