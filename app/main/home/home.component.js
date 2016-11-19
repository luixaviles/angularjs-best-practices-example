(function () {
    'use strict';

    angular
        .module('myApp.home')
        .component('maHome', maHome());

    function maHome() {
        var directive = {
            controller: HomeController,
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

