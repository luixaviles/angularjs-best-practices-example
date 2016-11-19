'use strict';

describe('footer directive', function () {
    var element,
        $scope,
        $compile;

    beforeEach(module('footer'));

    beforeEach(inject(function (_$compile_, $rootScope, $templateCache) {
        $scope = $rootScope.$new();
        $compile = _$compile_;
        $templateCache.put('directives/footer/footer.html', '<div class="footer"><p>Angular</p></div>');
    }));

    it('should generate footer section', function () {
        element = $compile('<footer></footer>')($scope);
        $scope.$digest();
        expect(element.html()).toContain('class="footer"');
        expect(element.text()).toEqual('Angular');
    });
});
