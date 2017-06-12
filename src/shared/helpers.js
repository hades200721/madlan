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

// ++++++++++++++++++

function justCount(max, min) {
	for (let i=min; i<max; i++){
		console.log(i);
	}
}

function measureTime(funName) {
	let originalFun = window[funName];
	let len = originalFun.length;
	window[funName] = function(a, b, c, d, e, f, g) {
		console.time(funName);
		originalFun.apply(null, Array.prototype.slice.call(arguments).splice(0,len));
		console.timeEnd(funName);
	};
}
