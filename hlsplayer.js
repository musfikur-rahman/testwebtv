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
var boishakhitvplus = 'ib2lzaGFraGlwbHVzLnN0cmVhbS9jaHVua3MubTN1OA==';
var btvctg = 'ib2lzaGFraGlwbHVzLnN0cmVhbS9jaHVua3MubTN1OA==';
var btvworld = 'idHZiZC1vZmZpY2Utc2cuc3RyZWFtL2NodW5rcy5tM3U4';
var canbangla = 'jYW5iYW5nbGF0di5zdHJlYW0vY2h1bmtzLm0zdTg=';
var channel9 = 'jaGFubmVsOWhkLnN0cmVhbS9jaHVua3MubTN1OA==';
var channelsuk = 'jaHN1a29mZi5zdHJlYW0vY2h1bmtzLm0zdTg=';
var channeli = 'jaGFubmVsaS04LW9yZy5zdHJlYW0vY2h1bmtzLm0zdTg=';
var cumilla24 = 'jdW1pbGxhMjQuc3RyZWFtL2NodW5rcy5tM3U4';
var dbcnews = 'kYmNuZXdzLnN0cmVhbS9jaHVua3MubTN1OA==';
var doyeltvcanada = 'kb3llbHR2LnN0cmVhbS9jaHVua3MubTN1OA==';
var dwnews = 'kd25ld3Muc3RyZWFtL2NodW5rcy5tM3U4';
var gaanbangla = 'nYWFuYmFuZ2xhLTgtb3JnZC5zdHJlYW0vY2h1bmtzLm0zdTg=';
var independenttv = 'pbmRlcGVuZGVudC04LW9yZy5zdHJlYW0vY2h1bmtzLm0zdTg=';
var jamunatv = 'qYW11bmEtdGVzdC1zYW1wbGUtb2suc3RyZWFtL2NodW5rcy5tM3U4';
var mohonatv = 'tb2hvbmF0djAwMDAwMjIzMjMyMjQ0NTU2NjMzLnN0cmVhbS9jaHVua3MubTN1OA==';
var nantv = 'uYW50di5zdHJlYW0vY2h1bmtzLm0zdTg=';
var news24 = 'uZXdzMjRsb2NhbC5zdHJlYW0vY2h1bmtzLm0zdTg=';
var royaltv = 'yb3lhbHR2LnN0cmVhbS9jaHVua3MubTN1OA==';
var rtnews = 'ydG5ld3Muc3RyZWFtL2NodW5rcy5tM3U4';
var somoinews = 'zb21veXQwMDAwMTEyMjY2MTU1NDQ1NDQuc3RyZWFtL2NodW5rcy5tM3U4';

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
document.getElementById("boishakhitvplus").onclick = function() { hlsplayerplay(url_start.concat(boishakhitvplus)); videomodaldisplay(); }
document.getElementById("btvctg").onclick = function() { hlsplayerplay(url_start.concat(btvctg)); videomodaldisplay(); }
document.getElementById("btvworld").onclick = function() { hlsplayerplay(url_start.concat(btvworld)); videomodaldisplay(); }
document.getElementById("canbangla").onclick = function() { hlsplayerplay(url_start.concat(canbangla)); videomodaldisplay(); }
document.getElementById("channel9").onclick = function() { hlsplayerplay(url_start.concat(channel9)); videomodaldisplay(); }
document.getElementById("channelsuk").onclick = function() { hlsplayerplay(url_start.concat(channelsuk)); videomodaldisplay(); }
document.getElementById("channeli").onclick = function() { hlsplayerplay(url_start.concat(channeli)); videomodaldisplay(); }
document.getElementById("cumilla24").onclick = function() { hlsplayerplay(url_start.concat(cumilla24)); videomodaldisplay(); }
document.getElementById("dbcnews").onclick = function() { hlsplayerplay(url_start.concat(dbcnews)); videomodaldisplay(); }
document.getElementById("doyeltvcanada").onclick = function() { hlsplayerplay(url_start.concat(doyeltvcanada)); videomodaldisplay(); }
document.getElementById("dwnews").onclick = function() { hlsplayerplay(url_start.concat(dwnews)); videomodaldisplay(); }
document.getElementById("gaanbangla").onclick = function() { hlsplayerplay(url_start.concat(gaanbangla)); videomodaldisplay(); }
document.getElementById("independenttv").onclick = function() { hlsplayerplay(url_start.concat(independenttv)); videomodaldisplay(); }
document.getElementById("jamunatv").onclick = function() { hlsplayerplay(url_start.concat(jamunatv)); videomodaldisplay(); }
document.getElementById("mohonatv").onclick = function() { hlsplayerplay(url_start.concat(mohonatv)); videomodaldisplay(); }
document.getElementById("nantv").onclick = function() { hlsplayerplay(url_start.concat(nantv)); videomodaldisplay(); }
document.getElementById("news24").onclick = function() { hlsplayerplay(url_start.concat(news24)); videomodaldisplay(); }
document.getElementById("royaltv").onclick = function() { hlsplayerplay(url_start.concat(royaltv)); videomodaldisplay(); }
document.getElementById("rtnews").onclick = function() { hlsplayerplay(url_start.concat(rtnews)); videomodaldisplay(); }
document.getElementById("somoinews").onclick = function() { hlsplayerplay(url_start.concat(somoinews)); videomodaldisplay(); }
