var url_1 = 'aHR0cDovLzEwMy41NS4xNDQuNDYvaGxzL0dhemktVFYubTN1OA==';
var url_2 = 'aHR0cDovLzE3Mi4xNi4xMjguMjUwOjgwODEvbGl2ZS9nYXppdHYvY2h1bmtzLm0zdTg=';
var url_3 = 'aHR0cDovLzEwMy41NS4xNDQuNDYvaGxzL3Qtc3BvcnRzLm0zdTg=';
var url_4 = 'aHR0cHM6Ly90ZW1waW5mb2Jhc2UuamFnb2JkLmNvbTo0NDQvY1pWeWRtVnlYOFJwYkVVOU1pOHhOeTh5TURFMEdJRFU2Umd6UTZOVEFnZEVvYWVGemJGOTJZV3hJWlQwMFUwZXpOMUl6TXlmdmNHVk1aRUpDVEVGV2VWTjNQVE9tZEZzYVdSdGFXNTFhaVBoblBUSS90aXRhc2guc3RyZWFtL2NodW5rcy5tM3U4';
var url_5 = 'aHR0cHM6Ly90ZW1waW5mb2Jhc2UuamFnb2JkLmNvbTo0NDQvY1pWeWRtVnlYOFJwYkVVOU1pOHhOeTh5TURFMEdJRFU2Umd6UTZOVEFnZEVvYWVGemJGOTJZV3hJWlQwMFUwZXpOMUl6TXlmdmNHVk1aRUpDVEVGV2VWTjNQVE9tZEZzYVdSdGFXNTFhaVBoblBUSS9hdG5iZC04LW9yZy5zdHJlYW0vY2h1bmtzLm0zdTg=';

var videomodal = document.getElementById("video-modal");
var spanmodal = document.getElementById("span-modal");
videomodal.style.display='none';
spanmodal.className='w3-button w3-display-topright w3-red';

document.getElementById("ch01").onclick = function() { hlsplayer(url_5); videomodaldisplay(); }
document.getElementById("ch02").onclick = function() { hlsplayer(url_4); videomodaldisplay(); }

spanmodal.onclick = function(){
  videomodal.style.display='none';
}

async function hlsplayer(urlsrc){
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

async function videomodaldisplay(){
  videomodal.style.display='block';
  videomodal.style.position='absolute';
  videomodal.style.left='0';
  videomodal.style.right='0';
  videomodal.style.top='0';
  videomodal.style.bottom='0';
  videomodal.style.background='white';
}