(function () {
    'use strict';

    angular
        .module('navbar')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$scope'];

    function NavbarController($scope) {
        $scope.title = 'NavbarController';

        activate();

        function activate() {

        }
    }
})();

