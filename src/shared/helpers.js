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

function printLoop(start, end) {
    for (let i=start; i< end; i++) {
        console.log(i);
    }
}

function measureFunctionTime(funcName, context) {
    let cont = context || window;
    let origFunc = cont[funcName];
    if (!origFunc) {
        return true;
    }
    cont[funcName] = function(a, b, c, d, e, f) {
        console.time(funcName);
        origFunc.apply(this, arguments);
        console.timeEnd(funcName);
    }
}