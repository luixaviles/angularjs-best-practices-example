(function () {
    'use strict';

    angular
        .module('myApp', [
            'ui.router',
            'myApp.main'
        ]).config(App);

    App.$inject = ['$urlRouterProvider'];

    function App($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }
})();
