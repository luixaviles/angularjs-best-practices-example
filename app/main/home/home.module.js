(function () {
    'use strict';

    angular
        .module('myApp.home', ['ui.router'])
        .config(Home);

    Home.$inject = ['$stateProvider'];

    function Home($stateProvider) {
        $stateProvider
            .state('home', {
                url: 'home',
                parent: 'main',
                templateUrl: 'main/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vmHome'
            });
    }
})();
