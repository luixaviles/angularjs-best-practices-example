'use strict';

describe('navbar directive', function () {
    var element,
        $scope,
        $compile;

    beforeEach(module('navbar'));

    beforeEach(inject(function (_$compile_, $rootScope, $templateCache) {
        $scope = $rootScope.$new();
        $compile = _$compile_;
        $templateCache.put('directives/navbar/navbar.html', '<ul class="menu"><li><a ui-sref="home">Home</a></li></ul>');
    }));

    it('should generate footer section', function () {
        element = $compile('<navbar></navbar>')($scope);
        $scope.$digest();
        expect(element.html()).toContain('class="menu"');
        expect(element.text()).toEqual('Home');
    });
});
