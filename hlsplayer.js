var url_1 = 'aHR0cHM6Ly90ZW1waW5mb2Jhc2UuamFnb2JkLmNvbTo0NDQvY1pWeWRtVnlYOFJwYkVVOU1pOHhOeTh5TURFMEdJRFU2Umd6UTZOVEFnZEVvYWVGemJGOTJZV3hJWlQwMFUwZXpOMUl6TXlmdmNHVk1aRUpDVEVGV2VWTjNQVE9tZEZzYVdSdGFXNTFhaVBoblBUSS90aXRhc2guc3RyZWFtL2NodW5rcy5tM3U4';
var url_2 = 'aHR0cDovLzEwMy41NS4xNDQuNDYvaGxzL3Qtc3BvcnRzLm0zdTg=';
var url_3 = 'aHR0cDovLzEwMy41NS4xNDQuNDYvaGxzL0dhemktVFYubTN1OA==';
var url_4 = 'aHR0cDovLzE3Mi4xNi4xMjguMjUwOjgwODEvbGl2ZS9nYXppdHYvY2h1bmtzLm0zdTg=';
var url_5 = 'aHR0cHM6Ly90ZW1waW5mb2Jhc2UuamFnb2JkLmNvbTo0NDQvY1pWeWRtVnlYOFJwYkVVOU1pOHhOeTh5TURFMEdJRFU2Umd6UTZOVEFnZEVvYWVGemJGOTJZV3hJWlQwMFUwZXpOMUl6TXlmdmNHVk1aRUpDVEVGV2VWTjNQVE9tZEZzYVdSdGFXNTFhaVBoblBUSS9hdG5iZC04LW9yZy5zdHJlYW0vY2h1bmtzLm0zdTg=';

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

document.getElementById("ch01").onclick = function() { hlsplayerplay(url_1); videomodaldisplay(); }
document.getElementById("ch02").onclick = function() { hlsplayerplay(url_2); videomodaldisplay(); }
document.getElementById("ch03").onclick = function() { hlsplayerplay(url_3); videomodaldisplay(); }
document.getElementById("ch04").onclick = function() { hlsplayerplay(url_4); videomodaldisplay(); }
document.getElementById("ch05").onclick = function() { hlsplayerplay(url_5); videomodaldisplay(); }