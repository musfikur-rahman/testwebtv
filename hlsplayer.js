var url_start = 'aHR0cHM6Ly90ZW1waW5mb2Jhc2UuamFnb2JkLmNvbTo0NDQvY1pWeWRtVnlYOFJwYkVVOU1pOHhOeTh5TURFMEdJRFU2Umd6UTZOVEFnZEVvYWVGemJGOTJZV3hJWlQwMFUwZXpOMUl6TXlmdmNHVk1aRUpDVEVGV2VWTjNQVE9tZEZzYVdSdGFXNTFhaVBoblBUSS9';
var url_1 = '0aXRhc2guc3RyZWFtL2NodW5rcy5tM3U4';
var url_2 = 'aHR0cDovLzEwMy41NS4xNDQuNDYvaGxzL3Qtc3BvcnRzLm0zdTg=';
var url_3 = 'aHR0cDovLzEwMy41NS4xNDQuNDYvaGxzL0dhemktVFYubTN1OA==';
var url_4 = 'aHR0cDovLzE3Mi4xNi4xMjguMjUwOjgwODEvbGl2ZS9nYXppdHYvY2h1bmtzLm0zdTg=';
var url_5 = 'hbmFuZGF0di5zdHJlYW0vY2h1bmtzLm0zdTg=';
var url_6 = 'hdG5iZC04LW9yZy5zdHJlYW0vY2h1bmtzLm0zdTg=';
var url_7 = 'hdG5pc2xhbWljdHYuc3RyZWFtL2NodW5rcy5tM3U4';
var url_8 = 'iYW5nbGF2MDAwLnN0cmVhbS9jaHVua3MubTN1OA==';
var url_9 = '';

var mainpage = document.getElementById("main-page");
var modalpage = document.getElementById("modal-page");
var videodisplay = document.getElementById("video");
var closebutton = document.getElementById("close-button");
modalpage.style.display='none';

closebutton.onclick = function(){
  modalpage.style.display='none';
  mainpage.style.display='block';
  document.getElementById('video').src='';
}

async function videomodaldisplay(){
  mainpage.style.display='none';
  modalpage.style.display='block';
  videomodal.style.background='white';
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

document.getElementById("ch01").onclick = function() { hlsplayerplay(url_start.concat(url_1)); videomodaldisplay(); }
document.getElementById("ch02").onclick = function() { hlsplayerplay(url_2); videomodaldisplay(); }
document.getElementById("ch03").onclick = function() { hlsplayerplay(url_3); videomodaldisplay(); }
document.getElementById("ch04").onclick = function() { hlsplayerplay(url_4); videomodaldisplay(); }
document.getElementById("ch05").onclick = function() { hlsplayerplay(url_start.concat(url_5)); videomodaldisplay(); }
document.getElementById("ch06").onclick = function() { hlsplayerplay(url_start.concat(url_6)); videomodaldisplay(); }
document.getElementById("ch07").onclick = function() { hlsplayerplay(url_start.concat(url_7)); videomodaldisplay(); }
document.getElementById("ch08").onclick = function() { hlsplayerplay(url_start.concat(url_8)); videomodaldisplay(); }