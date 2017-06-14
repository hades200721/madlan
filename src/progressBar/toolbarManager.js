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

    this.setProcessBarTitle = function (value) {
        progressBarTitle.innerText = value;
    }

    this.showProcessBar = function () {
        showElement(progressBarElm, true);
    }

    this.hideProcessBar = function () {
        showElement(progressBarElm, false);
        resetProgressBar();
    }

    // update the progress bar position and value
    // @val - value in pre-cent representing complete
    this.updateProgressBar = function (val) {
        value = val;
        barElm.style.transform = 'translateX(' + (-progressBarWidth + value * progressBarWidth) + 'px)';
        // update text
        innerTextDone.innerHTML = parseInt(val * 100);
    }

    let resetProgressBar = () => {
        barElm.style.transform = 'translateX(' + (-progressBarWidth) + 'px)';
        this.setProcessBarTitle(this.statusType.IDLE);
        value = 0;
        innerTextDone.innerHTML = 0;
    }
}