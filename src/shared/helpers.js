function createElement(elmTag, elmClassList) {
    let newElm = document.createElement(elmTag);
    if (elmClassList) {
        newElm.className = elmClassList;
    }
    return newElm;
}

function showElement(elm, show) {
    if (!elm) {
        return true;
    }
    elm.style.display = show ? 'block' : 'none';
}

function generateRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}