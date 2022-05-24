var url_1 = 'http://103.55.144.46/hls/Gazi-TV.m3u8';
var url_2 = 'http://172.16.128.250:8081/live/gazitv/chunks.m3u8';
var url_3 = 'http://103.55.144.46/hls/t-sports.m3u8';
var url_4 = 'https://tempinfobase.jagobd.com:444/cZVydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZT00U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI/titash.stream/chunks.m3u8';

if (Hls.isSupported()) {
  var video = document.getElementById('video');
  var hls = new Hls();
  hls.loadSource(url_4);
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED,function() {
    video.play();
  });
}