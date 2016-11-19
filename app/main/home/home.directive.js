(function () {
    'use strict';

    angular
        .module('myApp.home')
        .directive('maHome', maHome);

    maHome.$inject = [];

    function maHome() {
        var directive = {
            controller: HomeController,
            controllerAs: 'vmHome',
            templateUrl: 'main/home/home.html',
            restrict: 'E',
            scope: {}
        };

        return directive;
    }

    HomeController.$inject = [];

    function HomeController() {
        var vm = this;

        vm.title = 'HomeController';

        activate();

        function activate() {

        }
    }
})();

