(function () {
    'use strict';

    angular
        .module('myApp.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    function HomeController() {
        var vm = this;

        vm.title = 'HomeController';

        activate();

        function activate() {

        }
    }
})();

