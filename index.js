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

if(Hls.isSupported()) {
  var video = document.getElementById('video');
  var hls = new Hls();
  hls.loadSource('https://tempinfobase.jagobd.com:444/cZVydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZT00U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/titash.stream/chunks.m3u8');
  hls.attachMedia(video);
  
  hls.on(Hls.Events.MANIFEST_PARSED,function() {
      video.play();
  });
  
}