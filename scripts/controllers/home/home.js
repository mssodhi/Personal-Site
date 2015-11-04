'use strict';

angular.module('app').controller('HomeCtrl', function () {
    var ctrl = this;
    ctrl.imgSource = '../../../resources/images/mainpic.jpeg';
    ctrl.messages = [
        {text:"Standard Message", type: 'no message'},
        {text:"Success Message!", type:"success"},
        {text:"Alert Message!", type : "alert"},
        {text:"secondary message...", type : "secondary"},
        {text: 'hellow World', type: 'hehaha'},
        {text: 'hellow', type: 'yahhooo'},
        {text: 'World', type: 'cnbc'}
    ]
});