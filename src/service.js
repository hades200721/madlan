xhrRequest = (url, method, data, extraHeader, onSuccessCallback, onProgressCallback, onErrorCallback) => {
    let http = new XMLHttpRequest();
    let params = data || '';
    http.open(method, url, true);

    http.onreadystatechange = function (data) {//Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            if (onSuccessCallback) {
                onSuccessCallback(http.response);
            }
        }
    }
    if (onProgressCallback) {
        http.upload.addEventListener('progress', onProgressCallback, false);
    }
    if (onErrorCallback) {
        http.addEventListener('error', onErrorCallback);
    }
    if (extraHeader) {
        for (key in extraHeader) {
            http.setRequestHeader(key, extraHeader[key]);
        };
    }
    http.send(params);
}
