(function () {
    'use strict';

    angular
        .module('myApp.about')
        .controller('AboutController', AboutController);

    AboutController.$inject = [];

    function AboutController() {
        var vm = this;

        vm.title = 'AboutController';

        activate();

        function activate() {

        }
    }
})();

