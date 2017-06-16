function ImageItemManager(index, fullPath) {
    let name = fullPath.split('/')[fullPath.split('/').length-1];
    let elmContainer = createElement('div', 'relative container');
    let boxElm = createElement('a', 'c-pointer box');
    let thumbnailImageElm = createElement('div', 'thumbnail-image');
    let rndBorderColor = generateRandomNumber(0, this.borderColors.length);
    thumbnailImageElm.style.borderColor = this.borderColors[rndBorderColor];
    let imageElm = createElement('img', 'c-pointer');
    let imageBackgroundElm = createElement('div', 'image-background');
    imageBackgroundElm.setAttribute('name', name);
    thumbnailImageElm.appendChild(imageElm);
    thumbnailImageElm.appendChild(imageBackgroundElm);
    elmContainer.appendChild(boxElm);
    elmContainer.appendChild(thumbnailImageElm);
    imageElm.src = fullPath;

    boxElm.addEventListener('click', function () {
        xhrPromise('POST', './server/remove-image.php?src=' + fullPath + '&id=' + index).then(function (result) {
            galleryManager.removeImage(result);
        }, function (err) {
            console.log(err);
        });
    })

    this.getImageContainer = function () {
        return elmContainer;
    }

    this.getImageElm = function () {
        return imageElm;
    }

}

ImageItemManager.prototype.borderColors = ['#40a685', '#0bd19d', '#d60f96', '#4fdf71', '#ff5b57', '#7FDBFF', '#FFDC00', '#001f3f', '#FF851B'];