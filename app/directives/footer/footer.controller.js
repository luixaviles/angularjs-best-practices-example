(function () {
    'use strict';

    angular
        .module('footer')
        .controller('FooterController', FooterController);

    FooterController.$inject = [];

    function FooterController() {
        var vm = this;

        vm.title = 'FooterController';

        activate();

        function activate() {

        }
    }
})();

