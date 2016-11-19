(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('MainController', MainController);

    MainController.$inject = [];

    function MainController() {
        var vm = this;

        vm.title = 'MainController';

        activate();

        function activate() {

        }
    }
})();

