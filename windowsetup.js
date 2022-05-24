window.onresize = function () {
    windowSize();
}

document.onreadystatechange = function () {
    windowSize();
}

async function windowSize() {
    document.getElementById('video').style.height = (window.innerHeight - 10) + 'px';
    document.getElementById('video').style.width = (window.innerWidth) + 'px';
    document.getElementById('video').style.overflow = scroll;
}