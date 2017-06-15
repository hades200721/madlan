describe('progress bar suite case', function () {
    beforeEach(function () {
        fakeprogress = new ProgessBarManager();
    });

    it('should be able to create our new progress', function () {
        expect(fakeprogress).not.toBe(null);
    })

    it('updating process bar value', function () {
        fakeprogress.updateProgressBar(5);
        expect(fakeprogress.getValue()).toBe(5);
        expect(fakeprogress.getValue()).not.toBe(4);        
        fakeprogress.resetProgressBar();
        expect(fakeprogress.getValue()).toBe(0); 
    })
});