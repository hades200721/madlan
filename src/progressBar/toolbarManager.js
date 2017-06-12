var ProgessBarManager = function () {

    this.statusType = {
        IDLE: 'idle',
        DOWNLOAD: 'downloading...',
        UPLOAD: 'uploading...'
    }
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
        const newVal = val * progressBarWidth;
        barElm.style.transform = 'translateX(' + (-progressBarWidth + newVal) + 'px)';
        // update text
        innerTextDone.innerHTML = parseInt(val * 100);
    }

    let resetProgressBar = () => {
        barElm.style.transform = 'translateX(' + (-progressBarWidth) + 'px)';
        this.setProcessBarTitle(this.statusType.IDLE);
        innerTextDone.innerHTML = 0;
    }
}