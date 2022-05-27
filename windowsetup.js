window.onresize = function () {
  windowSize();
}

document.onreadystatechange = function () {
  windowSize();
}

async function windowSize() {
  document.getElementById('video').style.height = (document.documentElement.clientHeight - 5) + 'px';
  document.getElementById('video').style.width = (document.documentElement.clientWidth - 5) + 'px';
  document.getElementById('video').style.overflow = scroll;
}

