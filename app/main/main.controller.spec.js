'use strict';

describe('Main controller', function () {

    var controller;

    beforeEach(module('footer'));
    beforeEach(module('navbar'));
    beforeEach(module('myApp.about'));
    beforeEach(module('myApp.home'));
    beforeEach(module('myApp'));

    beforeEach(inject(function ($controller) {
        controller = $controller('MainController');
    }));

    it('should define a title', function () {
        expect(controller.title).toBeDefined();
    });
});