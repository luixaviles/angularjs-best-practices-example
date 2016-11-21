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
                template: '<ma-home name="\'Luis\'"></ma-home>'
            });
    }
})();
