'use strict';

let processBarManager = new ProgessBarManager();
let imagePreviewOverlay = new ImagePreview(document.querySelector('.preview img'));
let galleryManager = new GalleryManager();

function onChange() {
	if (!filesElm) { console.log('no files were found'); } else {
		let file = filesElm.files[0];
		if (SUPPORTED_FILES.includes(file.type) && file.size <= MAX_FILE_SIZE) {
			imgFormElm.submit();
		}
	}
}

xhrRequest('get-images.php', 'GET', '', { 'Content-type': 'application/x-www-form-urlencoded' }, galleryManager.loadImages, null, null);

function uploadFile() {
	if (!filesElm) { console.log('no files were found'); return false; } else {
		let file = filesElm.files[0];
		if (SUPPORTED_FILES.includes(file.type) && file.size <= MAX_FILE_SIZE) {
			xhrRequest('server-services.php', 'POST', file, { 'X-FILENAME': file.name }, null,
				// function () { onUploadSuccess(imagePath + file.name, file.name.split('.')[0]); },
				function (e) { processBarManager.updateProgressBar(e.loaded / e.total); },
				function (e) { console.warn('error occures'); },
			);
			processBarManager.setProcessBarTitle(processBarManager.statusType.UPLOAD);
			processBarManager.showProcessBar();
		}
		return true;
	}
}

// function onUploadSuccess(downloadURL, fileName) {
// 	galleryManager.addImageToGallery(imagePath, imageTitle);
// }
