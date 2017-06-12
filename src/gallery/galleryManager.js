var GalleryManager = function () {
    let imagesLoaded = 0;
    let imagesFound = 0;
    const borderColors = ['#40a685', '#0bd19d', '#d60f96', '#4fdf71', '#ff5b57'];

    const galleryElm = document.getElementById('gallery');
    let imageItem = new ImageItemManager();

    this.loadImages = function (filesArray) {
        processBarManager.setProcessBarTitle(processBarManager.statusType.DOWNLOAD);
        processBarManager.showProcessBar();
        filesArray = filesArray.split(',');
        imagesFound = filesArray.length - 1;
        for (let i = 0; i < filesArray.length - 1; i++) {
            let fileFullName = filesArray[i];
            let fileName = fileFullName.split('.')[0];
            let path = imagePath + fileFullName;
            addImageToGallery(path, fileName);
        }
    }

    let addImageToGallery = (imagePath, imageTitle) => {
        let elmContainer = createElement('div', 'container');
        let thumbnailImageElm = createElement('div', 'thumbnail-image');
        let rndBorderColor = generateRandomNumber(0, borderColors.length-1);
        thumbnailImageElm.style.borderColor = borderColors[rndBorderColor];
        let imgElm = createElement('img', 'c-pointer');
        let imageBackgroundElm = createElement('div', 'image-background');
        imageBackgroundElm.setAttribute('name', imageTitle);
        thumbnailImageElm.appendChild(imgElm);
        thumbnailImageElm.appendChild(imageBackgroundElm);
        elmContainer.appendChild(thumbnailImageElm);
        imgElm.src = imagePath;
        imgElm.onload = function (e) {
            imagesLoaded++;
            if (imagesLoaded === imagesFound) {
                processBarManager.hideProcessBar();
            } else {
                processBarManager.updateProgressBar(imagesLoaded / imagesFound);
            }
            galleryElm.insertBefore(elmContainer, galleryElm.firstChild);
            counterElmWrapper.innerText = ++imagesCount;
        }
        initEvents(imgElm);
    }

    let initEvents = (imgElm) => {
        imgElm.addEventListener("click", function () {
            imagePreviewOverlay.showOverlay();
            imagePreviewOverlay.setSource(event.target.src);
        })
    }

}