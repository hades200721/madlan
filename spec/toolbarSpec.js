describe('progress bar suite case', function () {
    beforeEach(function () {
        fakeprogress = new ProgessBarManager();
    });

    it('should be able to create our new progress', function () {
        expect(fakeprogress).not.toBe(null);
    })

    // it('should be able to create our new progress', function () {
    //     expect(fakeprogress.updateProgressBar(5)).not.toBe(null);
    // })
});