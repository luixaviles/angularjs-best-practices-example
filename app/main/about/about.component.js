(function () {
    'use strict';

    angular
        .module('myApp.about')
        .component('maAbout', maAbout());

    function maAbout() {
        var directive = {
            controller: AboutController,
            templateUrl: 'main/about/about.html',
            restrict: 'E',
            scope: {}
        };

        return directive;
    }

    AboutController.$inject = [];

    function AboutController() {
        var vm = this;

        vm.title = 'AboutController';

        activate();

        function activate() {

        }
    }
})();

