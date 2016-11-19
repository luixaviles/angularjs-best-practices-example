'use strict';

describe('Home controller', function () {

    var $scope,
        controller;

    beforeEach(module('myApp.home'));

    beforeEach(inject(function ($controller, $rootScope) {
        $scope = $rootScope.$new();
        controller = $controller('HomeController', {
            $scope: $scope
        });
    }));

    it('should define a title', function () {
        expect($scope.title).toBeDefined();
    });
});