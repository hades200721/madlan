// Code under test
var flag = false;
var fakeGallery;

function testAsync(done) {
    // Wait two seconds, then set the flag to true
    fakeGallery = new GalleryManager();
    var imagesArray = `1.jpg,2.gif,3.jpg,4.jpg,`;
    fakeGallery.loadImages(imagesArray);
    setTimeout(function () {
        done();
    }, 2000);
}

describe('gallery suite case', function () {
    beforeAll(function (done) {
        testAsync(done);
    });

    it('should be able to create new gallery', function () {
        expect(fakeGallery).not.toBe(null);
    });

    it('loading images', function () {
        expect(fakeGallery.galleryArray.length).toBe(4);
        expect(fakeGallery.galleryArray.length).not.toBe(0);
    });

    it('removing image', function () {
        expect(fakeGallery.galleryArray.length).toBe(4);
        fakeGallery.removeImage(0);
        fakeGallery.removeImage(0);
        fakeGallery.removeImage(0);        
        fakeGallery.removeImage(0);
        expect(fakeGallery.galleryArray.length).toBe(0);
        expect(fakeGallery.galleryArray.length).not.toBe(4);
    });

});
