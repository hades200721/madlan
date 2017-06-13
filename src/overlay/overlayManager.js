 function OverlayManager (overlay) {

    const overlayElm = overlay;

    this.showOverlay = function () {
        showElement(overlayElm, true);
    }

    this.hideOverlay = function () {
        showElement(overlayElm, false);
        this.setSource('');
    }
}

function ImagePreview (imgElm) {

    OverlayManager.call(this, document.querySelector('#overlay'));

    const previewImgElm = imgElm;

    this.setSource = function(src) {
        previewImgElm.src = src;
    }

}

ImagePreview.prototype = Object.create(OverlayManager.prototype);
