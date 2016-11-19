(function () {
    'use strict';

    angular
        .module('footer')
        .directive('footer', Footer);

    Footer.$inject = [];

    function Footer() {
        var directive = {
            bindToController: true,
            controller: 'FooterController',
            controllerAs: '$ctrl',
            templateUrl: 'directives/footer/footer.html',
            link: link,
            restrict: 'E',
            scope: {}
        };

        return directive;

        function link(scope, element, attrs) {

        }
    }
})();

