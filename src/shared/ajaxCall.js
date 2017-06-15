function xhrPromise(method, url) {
    return new Promise(function (resolve, reject) {
        let http = new XMLHttpRequest();
        http.open(method, url);
        http.onload = function () {
            if (http.status == 200) {
                resolve(http.response);
            }
            else {
                reject(Error(http.statusText));
            }
        };
        http.onerror = function () {
            reject(Error("Network Error"));
        };
        http.send();
    });
}
