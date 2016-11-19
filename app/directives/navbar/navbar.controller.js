(function () {
    'use strict';

    angular
        .module('navbar')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = [];

    function NavbarController() {
        var vm = this;

        vm.title = 'NavbarController';

        activate();

        function activate() {

        }
    }
})();

