var GalleryManager = function () {

    this.imagesLoaded = 0;
    this.imagesFound = 0;
    this.galleryArray = [];
    this.galleryElm = document.getElementById('gallery');

    this.removeImage = function (index) {
        if (isNaN(index)) { return true; }
        // removed from array
        let imageItemToRemove = galleryManager.galleryArray.splice(parseInt(index), 1)[0]; // get imageitem object
        // removed from dom
        let container = imageItemToRemove.getImageContainer();
        this.galleryElm.removeChild(container);
    }
}

GalleryManager.prototype.loadImages = function (filesArray) {
    processBarManager.setProcessBarTitle(processBarManager.statusType.DOWNLOAD);
    processBarManager.showProcessBar();
    filesArray = filesArray.split(',');
    this.imagesFound = filesArray.length - 1;
    for (let i = 0; i < this.imagesFound; i++) {
        let fileFullName = filesArray[i];
        let newImg = new ImageItemManager(i, fileFullName);
        this.addImageToGallery(newImg);
    }
}

GalleryManager.prototype.addImageToGallery = function (imageItem) {
    this.galleryArray.push(imageItem);
    let imgElm = imageItem.getImageElm();
    imgElm.onload = e => {
        this.imagesLoaded++;
        if (this.imagesLoaded === this.imagesFound) {
            processBarManager.hideProcessBar();
        } else {
            processBarManager.updateProgressBar(this.imagesLoaded / this.imagesFound);
        }
        this.galleryElm.appendChild(imgElm.parentElement.parentElement);
        // this.galleryElm.appendChild(imgElm.getImageContainer());
        counterElmWrapper.innerText = ++this.imagesCount;
    }
    imgElm.addEventListener("click", function () {
        imagePreviewOverlay.showOverlay();
        imagePreviewOverlay.setSource(event.target.src);
    })
}