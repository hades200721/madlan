// xhrRequest = (url, method, data, extraHeader, onSuccessCallback, onProgressCallback, onErrorCallback) => {
//     let http = new XMLHttpRequest();
//     let params = data || '';
//     http.open(method, url, true);

//     http.onreadystatechange = data => {
//         if (http.readyState == 4 && http.status == 200) {
//             if (onSuccessCallback) {
//                 onSuccessCallback(http.response);
//             }
//         }
//     }
//     if (onProgressCallback) {
//         http.upload.addEventListener('progress', onProgressCallback, false);
//     }
//     if (onErrorCallback) {
//         http.addEventListener('error', onErrorCallback);
//     }
//     if (extraHeader) {
//         for (key in extraHeader) {
//             http.setRequestHeader(key, extraHeader[key]);
//         };
//     }
//     http.send(params);
// }

function xhrPromise(method, url) {
    return new Promise(function (resolve, reject) {
        let http = new XMLHttpRequest();
        // let params = data || '';
        http.open(method, url);
        http.onload = function () {
            if (http.status == 200) {
                resolve(http.response);
            }
            else {
                reject(Error(http.statusText));
            }
        };
        // Handle network errors
        http.onerror = function () {
            reject(Error("Network Error"));
        };
        http.send();
    });
}
