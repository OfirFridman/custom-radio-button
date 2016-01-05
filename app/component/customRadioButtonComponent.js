/**
 * Created by ofir on 1/5/2016.
 */
(function (angular) {
    'use strict';

    var customRadioButton = {
        restrict: 'A',
        template: template
    };

    function template($element, $attrs) {
        var radioButtonId = $attrs.id;
        isIdExist(radioButtonId);
        $element.after('<label for="' + radioButtonId + '"></label>')
    }

    function isIdExist(radioButtonId) {
        if (radioButtonId === undefined || radioButtonId === "") {
            throw new Error("id attribute is mandatory for custom-radio-button component!!!");
        }
    }


    angular
        .module('custom-radio-button')
        .component('customRadioButton', customRadioButton);

})(angular);


