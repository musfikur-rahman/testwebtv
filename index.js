window.addEventListener('load', () => {
    registerSW();
});

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('sw.js');
    } catch (e) {
      console.log(`SW registration failed`);
    }
  }
}

var link_1 = 'http://103.55.144.46/hls/Gazi-TV.m3u8';
var response_1 = fetch(link_1);

var link_2 = 'http://172.16.128.250:8081/live/gazitv/chunks.m3u8';
var response_2 = fetch(link_2);

var link_3 = 'http://103.55.144.46/hls/t-sports.m3u8';
var response_3 = fetch(link_3);

var link_4 = 'https://tempinfobase.jagobd.com:444/cZVydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZT00U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/titash.stream/chunks.m3u8';
var response_4 = fetch(link_4);

if(response_1.status == 200) {
  finalLink = link_1;
}

else if (response_2.status == 200) {
  finalLink = link_2;
}

else if (response_3.status == 200) {
  finalLink = link_3;
}

else if (response_4.status == 200) {
  finalLink = link_4;
}

if(Hls.isSupported()) {
  var video = document.getElementById('video');
  var hls = new Hls();
  hls.loadSource(finalLink);
  hls.attachMedia(video);
  
  hls.on(Hls.Events.MANIFEST_PARSED,function() {
      video.play();
  });
  
}