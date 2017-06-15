'use strict';

let processBarManager = new ProgessBarManager();
let imagePreviewOverlay = new ImagePreview(document.querySelector('.preview img'));
let galleryManager = new GalleryManager();

function onChange() {
	if (!filesElm) {
		console.log('no files were found');
	} else {
		imgFormElm.submit();
	}
}
// xhrRequest('./server/get-images.php', 'GET', '', { 'Content-type': 'application/x-www-form-urlencoded' }, galleryManager.loadImages, null, null);

xhrPromise('GET','./server/get-images.php').then(function (result) {
	galleryManager.loadImages(result); // "Stuff worked!"
}, function (err) {
	console.log(err); // Error: "It broke"
});

// function uploadFile() {
// 	debugger;
// 	if (!filesElm) { console.log('no files were found'); return false; } else {
// 		let file = filesElm.files[0];
// 		if (SUPPORTED_FILES.includes(file.type) && file.size <= MAX_FILE_SIZE) {
// 			xhrRequest('../server-services.php', 'POST', file, { 'X-FILENAME': file.name }, null,
// 				function (e) { processBarManager.updateProgressBar(e.loaded / e.total); },
// 				function (e) { console.warn('error occures'); },
// 			);
// 			processBarManager.showProcessBar(processBarManager.statusType.UPLOAD);
// 		}
// 		return true;
// 	}
// }
