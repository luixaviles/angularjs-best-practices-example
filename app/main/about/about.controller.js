(function () {
    'use strict';

    angular
        .module('myApp.about')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$scope'];

    function AboutController($scope) {
        $scope.title = 'AboutController';

        activate();

        function activate() {

        }
    }
})();

