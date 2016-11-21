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
            bindings: {
                name: '='
            }
        };

        return directive;
    }

    HomeController.$inject = ['$timeout'];

    function HomeController($timeout) {
        var vm = this;

        vm.title = 'HomeController';

        activate();

        function activate() {
            $timeout(function(){
                vm.name = 'Jose';
            }, 2000);
        }
    }
})();

