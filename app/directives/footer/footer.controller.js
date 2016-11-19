(function () {
    'use strict';

    angular
        .module('footer')
        .controller('FooterController', FooterController);

    FooterController.$inject = ['$scope'];

    function FooterController($scope) {
        $scope.title = 'FooterController';

        activate();

        function activate() {

        }
    }
})();

