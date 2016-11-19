'use strict';

describe('Main controller', function () {

    var $scope,
        controller;

    // angular.module('navbar', []);
    // angular.module('footer', []);
    // angular.module('myApp.home', []);
    // angular.module('myApp.about', []);

    beforeEach(module('footer'));
    beforeEach(module('navbar'));
    beforeEach(module('myApp.about'));
    beforeEach(module('myApp.home'));
    beforeEach(module('myApp'));

    beforeEach(inject(function ($controller, $rootScope) {
        $scope = $rootScope.$new();
        controller = $controller('MainController', {
            $scope: $scope
        });
    }));

    it('should define a title', function () {
        expect($scope.title).toBeDefined();
    });
});