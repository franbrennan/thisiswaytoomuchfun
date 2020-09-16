window.onload = function(){
var myVideo = document.getElementById("video01");

window.onclick = function() {
  myVideo.muted = !myVideo.muted;
    return false;
  }
}
