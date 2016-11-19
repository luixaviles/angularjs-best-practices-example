(function () {
    'use strict';

    angular
        .module('myApp.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];

    function HomeController($scope) {
        $scope.title = 'HomeController';

        activate();

        function activate() {

        }
    }
})();

