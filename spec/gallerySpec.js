// Code under test
var flag = false;
var fakeGallery;

function testAsync(done) {
    // Wait two seconds, then set the flag to true
    fakeGallery = new GalleryManager();
    var imagesArray = `./assets/testing/1.jpg,./assets/testing/2.gif,./assets/testing/3.jpg,./assets/testing/4.jpg`;
    fakeGallery.loadImages(imagesArray);
    setTimeout(function () {
        done();
    }, 500);
}

describe('gallery suite case', function () {
    beforeAll(function (done) {
        testAsync(done);
    });

    it('gallery init and load 4 images case', function () {
        expect(fakeGallery).not.toBe(null);
        expect(fakeGallery.galleryArray.length).toBe(4);
        expect(fakeGallery.galleryArray.length).not.toBe(0);
    });

    it('removing image', function () {
        for (var i=fakeGallery.galleryArray.length; i>0; i--) {
            fakeGallery.removeImage(0);
            expect(fakeGallery.galleryArray.length).toBe(i-1);
            expect(fakeGallery.galleryArray.length).not.toBe(i);
        }
    });

});
