(function () {
    'use strict';

    angular
        .module('myApp.about', ['ui.router'])
        .config(About);

    About.$inject = ['$stateProvider'];

    function About($stateProvider) {
        $stateProvider
            .state('about', {
                url: 'about',
                parent: 'main',
                template: '<ma-about></ma-about>'
            });
    }
})();
