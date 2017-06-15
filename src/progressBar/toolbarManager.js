var ProgessBarManager = function () {

    this.statusType = {
        IDLE: 'idle',
        DOWNLOAD: 'downloading...',
        UPLOAD: 'uploading...'
    }
    let value = 0;
    const progressBarElm = document.querySelector('#progress .arrow');
    const progressBarTitle = document.querySelector('#progress .title');
    const innerTextDone = document.getElementById('precentDone');
    const barElm = document.querySelector('.arrow-status');
    const progressBarWidth = barElm.offsetWidth;

    this.getValue = function() {
        return value;
    }

    this.showProcessBar = function (value) {
        progressBarTitle.innerText = value;
        showElement(progressBarElm, true);
    }

    this.hideProcessBar = function () {
        showElement(progressBarElm, false);
        this.resetProgressBar();
    }

    // update the progress bar position and value
    // @val - value in pre-cent representing complete
    this.updateProgressBar = function (val) {
        value = val;
        barElm.style.transform = 'translateX(' + (-progressBarWidth + value * progressBarWidth) + 'px)';
        // update text
        innerTextDone.innerHTML = parseInt(val * 100);
    }

    this.resetProgressBar = function() {
        barElm.style.transform = 'translateX(' + (-progressBarWidth) + 'px)';
        progressBarTitle.innerText = this.statusType.IDLE;
        value = 0;
        innerTextDone.innerHTML = 0;
    }
}