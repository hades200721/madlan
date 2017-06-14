describe('overlay suite case', function () {
    beforeEach(function () {
        fakeOverlay = new ImagePreview();
    });

    it('should be able to create our overlay', function () {
        expect(fakeOverlay).not.toBe(null);
    })
});