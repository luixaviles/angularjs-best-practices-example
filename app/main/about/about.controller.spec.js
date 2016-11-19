'use strict';

describe('myApp.about module', function () {

    beforeEach(module('myApp.about'));

    describe('About controller', function () {

        var $scope,
            controller;

        beforeEach(inject(function ($controller, $rootScope) {
            $scope = $rootScope.$new();
            controller = $controller('AboutController', {
                $scope: $scope
            });
        }));

        it('should define a title', function () {
            expect(controller.title).toBeDefined();
        });
    });
});