(function () {
    'use strict';

    angular
        .module('myApp')
        .component('maMain', maMain());

    function maMain() {
        var directive = {
            controller: MainController,
            templateUrl: 'main/main.html',
            restrict: 'E',
            scope: {}
        };

        return directive;
    }

    MainController.$inject = [];

    function MainController() {
        var vm = this;

        vm.title = 'MainController';

        activate();

        function activate() {

        }
    }
})();

