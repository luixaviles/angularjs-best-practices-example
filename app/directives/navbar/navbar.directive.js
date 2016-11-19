(function () {
    'use strict';

    angular
        .module('navbar')
        .directive('navbar', Navbar);

    Navbar.$inject = [];

    function Navbar() {
        var directive = {
            bindToController: true,
            controller: 'NavbarController',
            controllerAs: '$ctrl',
            templateUrl: 'directives/navbar/navbar.html',
            link: link,
            restrict: 'E',
            scope: {}
        };

        return directive;

        function link(scope, element, attrs) {

        }
    }
})();

