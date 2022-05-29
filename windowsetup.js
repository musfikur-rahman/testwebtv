window.onresize = function () {
  windowSize();
}

document.onreadystatechange = function () {
  windowSize();
}

async function windowSize() {
  var videodisplay = document.getElementById("video");
  videodisplay.style.height = (document.documentElement.clientHeight - 5) + 'px';
  videodisplay.style.width = (document.documentElement.clientWidth - 5) + 'px';
  videodisplay.style.overflow = scroll;
}