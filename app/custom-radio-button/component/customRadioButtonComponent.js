/**
 * Created by ofir on 1/5/2016.
 */
(function (angular) {
    'use strict';

    angular
        .module('custom-radio-button')
        .component('customRadioButton', customRadioButton);

    function customRadioButton() {
        return {
            restrict: 'A',
            controller: CustomRadioButtonCtrl,
            controllerAs: 'customRadioButton',
            bindToController: true,
            link: linker
        };

        function linker(scope, elem, attr, ctrl) {
            ctrl.init();
        }
    }

    function CustomRadioButtonCtrl() {

    }

    CustomRadioButtonCtrl.prototype.init = function () {

    };

})(angular);