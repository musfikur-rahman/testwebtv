var url_start = 'aHR0cHM6Ly90ZW1waW5mb2Jhc2UuamFnb2JkLmNvbTo0NDQvY1pWeWRtVnlYOFJwYkVVOU1pOHhOeTh5TURFMEdJRFU2Umd6UTZOVEFnZEVvYWVGemJGOTJZV3hJWlQwMFUwZXpOMUl6TXlmdmNHVk1aRUpDVEVGV2VWTjNQVE9tZEZzYVdSdGFXNTFhaVBoblBUSS9';
var url_1 = '0aXRhc2guc3RyZWFtL2NodW5rcy5tM3U4';
var url_2 = 'aHR0cDovLzEwMy41NS4xNDQuNDYvaGxzL3Qtc3BvcnRzLm0zdTg=';
var url_3 = 'aHR0cDovLzEwMy41NS4xNDQuNDYvaGxzL0dhemktVFYubTN1OA==';
var url_4 = 'aHR0cDovLzE3Mi4xNi4xMjguMjUwOjgwODEvbGl2ZS9nYXppdHYvY2h1bmtzLm0zdTg=';
var url_5 = 'hbmFuZGF0di5zdHJlYW0vY2h1bmtzLm0zdTg=';
var url_6 = 'hdG5iZC04LW9yZy5zdHJlYW0vY2h1bmtzLm0zdTg=';
var url_7 = 'hdG5pc2xhbWljdHYuc3RyZWFtL2NodW5rcy5tM3U4';
var url_8 = 'hdG5tdXNpYy5zdHJlYW0vY2h1bmtzLm0zdTg=';
var url_9 = 'hdG53cy1zZy5zdHJlYW0vY2h1bmtzLm0zdTg=';
var url_10 = 'iYW5nbGEyMXR2MDAwODg5OTU2LXNnLnN0cmVhbS9jaHVua3MubTN1OA==';
var url_11 = 'iYW5nbGF2MDAwLnN0cmVhbS9jaHVua3MubTN1OA==';
var url_12 = 'iaWpveTAwLnN0cmVhbS9jaHVua3MubTN1OA==';
var url_13 = 'iYW5nbGF0dmhkLnN0cmVhbS9jaHVua3MubTN1OA==';
var url_14 = 'iaXN3YWJhbmdsYXR2LnN0cmVhbS9jaHVua3MubTN1OA==';
var url_15 = 'ib2lzaGFraGl0di1vcmcuc3RyZWFtL2NodW5rcy5tM3U4';

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

document.getElementById("ch1").onclick = function() { hlsplayerplay(url_start.concat(url_1)); videomodaldisplay(); }
document.getElementById("ch2").onclick = function() { hlsplayerplay(url_2); videomodaldisplay(); }
document.getElementById("ch3").onclick = function() { hlsplayerplay(url_3); videomodaldisplay(); }
document.getElementById("ch4").onclick = function() { hlsplayerplay(url_4); videomodaldisplay(); }
document.getElementById("ch5").onclick = function() { hlsplayerplay(url_start.concat(url_5)); videomodaldisplay(); }
document.getElementById("ch6").onclick = function() { hlsplayerplay(url_start.concat(url_6)); videomodaldisplay(); }
document.getElementById("ch7").onclick = function() { hlsplayerplay(url_start.concat(url_7)); videomodaldisplay(); }
document.getElementById("ch8").onclick = function() { hlsplayerplay(url_start.concat(url_8)); videomodaldisplay(); }
document.getElementById("ch9").onclick = function() { hlsplayerplay(url_start.concat(url_9)); videomodaldisplay(); }
document.getElementById("ch10").onclick = function() { hlsplayerplay(url_start.concat(url_10)); videomodaldisplay(); }
document.getElementById("ch11").onclick = function() { hlsplayerplay(url_start.concat(url_11)); videomodaldisplay(); }
document.getElementById("ch12").onclick = function() { hlsplayerplay(url_start.concat(url_12)); videomodaldisplay(); }
document.getElementById("ch13").onclick = function() { hlsplayerplay(url_start.concat(url_13)); videomodaldisplay(); }
document.getElementById("ch14").onclick = function() { hlsplayerplay(url_start.concat(url_14)); videomodaldisplay(); }
document.getElementById("ch15").onclick = function() { hlsplayerplay(url_start.concat(url_15)); videomodaldisplay(); }