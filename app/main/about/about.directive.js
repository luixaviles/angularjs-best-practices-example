(function () {
    'use strict';

    angular
        .module('myApp.about')
        .directive('maAbout', maAbout);

    maAbout.$inject = [];

    function maAbout() {
        var directive = {
            controller: AboutController,
            controllerAs: 'vmAbout',
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

