(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope'];

    function MainController($scope) {
        $scope.title = 'MainController';

        activate();

        function activate() {

        }
    }
})();

