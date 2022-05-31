var url_start = 'aHR0cHM6Ly90ZW1waW5mb2Jhc2UuamFnb2JkLmNvbTo0NDQvY1pWeWRtVnlYOFJwYkVVOU1pOHhOeTh5TURFMEdJRFU2Umd6UTZOVEFnZEVvYWVGemJGOTJZV3hJWlQwMFUwZXpOMUl6TXlmdmNHVk1aRUpDVEVGV2VWTjNQVE9tZEZzYVdSdGFXNTFhaVBoblBUSS9';
var tsports1 = '0aXRhc2guc3RyZWFtL2NodW5rcy5tM3U4';
var anandatv = 'hbmFuZGF0di5zdHJlYW0vY2h1bmtzLm0zdTg=';
var atnbangla = 'hdG5iZC04LW9yZy5zdHJlYW0vY2h1bmtzLm0zdTg=';
var atnislamic = 'hdG5pc2xhbWljdHYuc3RyZWFtL2NodW5rcy5tM3U4';
var atnmusic = 'hdG5tdXNpYy5zdHJlYW0vY2h1bmtzLm0zdTg=';
var bangla21 = 'iYW5nbGEyMXR2MDAwODg5OTU2LXNnLnN0cmVhbS9jaHVua3MubTN1OA==';
var banglavision = 'iYW5nbGF2MDAwLnN0cmVhbS9jaHVua3MubTN1OA==';
var banglatv = 'iYW5nbGF0dmhkLnN0cmVhbS9jaHVua3MubTN1OA==';
var boishakhitv = 'ib2lzaGFraGl0di1vcmcuc3RyZWFtL2NodW5rcy5tM3U4';

var mainpage = document.getElementById("main-page");
var modalpage = document.getElementById("modal-page");
var closebutton = document.getElementById("close-button");
modalpage.style.display='none';

closebutton.onclick = function(){
  mainpage.style.display='block';
  modalpage.style.display='none';
  document.getElementById('video').src='';
}

async function videomodaldisplay(){
  mainpage.style.display='none';
  modalpage.style.display='block';
  modalpage.style.background='white';
}

async function hlsplayerplay(urlsrc){
  if (Hls.isSupported()) {
    var video = document.getElementById('video');
    var hls = new Hls();
    hls.loadSource(atob(urlsrc));
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
      video.play();
    });  
  }
}

document.getElementById("tsports1").onclick = function() { hlsplayerplay(url_start.concat(tsports1)); videomodaldisplay(); }
document.getElementById("anandatv").onclick = function() { hlsplayerplay(url_start.concat(anandatv)); videomodaldisplay(); }
document.getElementById("atnbangla").onclick = function() { hlsplayerplay(url_start.concat(atnbangla)); videomodaldisplay(); }
document.getElementById("atnislamic").onclick = function() { hlsplayerplay(url_start.concat(atnislamic)); videomodaldisplay(); }
document.getElementById("atnmusic").onclick = function() { hlsplayerplay(url_start.concat(atnmusic)); videomodaldisplay(); }
document.getElementById("bangla21").onclick = function() { hlsplayerplay(url_start.concat(bangla21)); videomodaldisplay(); }
document.getElementById("banglavision").onclick = function() { hlsplayerplay(url_start.concat(banglavision)); videomodaldisplay(); }
document.getElementById("banglatv").onclick = function() { hlsplayerplay(url_start.concat(banglatv)); videomodaldisplay(); }
document.getElementById("boishakhitv").onclick = function() { hlsplayerplay(url_start.concat(boishakhitv)); videomodaldisplay(); }