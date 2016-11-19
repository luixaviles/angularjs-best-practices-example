(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('maMain', maMain);

    maMain.$inject = [];

    function maMain() {
        var directive = {
            controller: MainController,
            controllerAs: 'vmMain',
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

