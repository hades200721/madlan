var GalleryManager = function () {
    let imagesLoaded = 0;
    let imagesFound = 0;

    let galleryArray = [];
    const galleryElm = document.getElementById('gallery');

    this.loadImages = function (filesArray) {
        processBarManager.setProcessBarTitle(processBarManager.statusType.DOWNLOAD);
        processBarManager.showProcessBar();
        filesArray = filesArray.split(',');
        imagesFound = filesArray.length - 1;
        for (let i = 0; i < imagesFound; i++) {
            let fileFullName = filesArray[i];
            galleryArray[i] = new ImageItemManager(i, fileFullName);
            addImageToGallery(galleryArray[i]);
        }
    }

    this.getGalleryArray = function() {
        return galleryArray;
    }

    const addImageToGallery = function (imageItem) {
        let newImg = imageItem.getImageElm();
        newImg.onload = e => {
            imagesLoaded++;
            if (imagesLoaded === imagesFound) {
                processBarManager.hideProcessBar();
            } else {
                processBarManager.updateProgressBar(imagesLoaded / imagesFound);
            }
            galleryElm.insertBefore(imageItem.getImageContainer(), galleryElm.firstChild);
            counterElmWrapper.innerText = ++imagesCount;
        }
        initEvents(newImg);
    }

    const initEvents = function (imgElm) {
        imgElm.addEventListener("click", function () {
            imagePreviewOverlay.showOverlay();
            imagePreviewOverlay.setSource(event.target.src);
        })
    }

    this.removeImage = function (index) {
        if (isNaN(index)) { return true; }
        // removed from array
        let imageItemToRemove = galleryManager.getGalleryArray().splice(parseInt(index), 1)[0]; // get imageitem object
        // removed from dom
        let container = imageItemToRemove.getImageContainer();
        galleryElm.removeChild(container);
    }


}