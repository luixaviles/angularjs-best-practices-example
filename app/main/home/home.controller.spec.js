'use strict';

describe('Home controller', function () {

    var controller;

    beforeEach(module('myApp.home'));

    beforeEach(inject(function ($controller) {
        controller = $controller('HomeController');
    }));

    it('should define a title', function () {
        expect(controller.title).toBeDefined();
    });
});