var vidElem = document.getElementById('target');

function enterFullscreen() {
  if(vidElem.requestFullscreen) vidElem.requestFullscreen();
  else if(vidElem.mozRequestFullScreen) vidElem.mozRequestFullScreen();
  else if(vidElem.webkitRequestFullscreen) vidElem.webkitRequestFullscreen();
  else if(vidElem.msRequestFullscreen) vidElem.msRequestFullscreen();
}

function exitFullscreen() {
  console.log("exitFullscreen");
  if(document.exitFullscreen) document.exitFullscreen();
  else if(document.mozCancelFullScreen) document.mozCancelFullScreen();
  else if(document.webkitExitFullscreen) document.webkitExitFullscreen();
  else if(document.msExitFullscreen) document.msExitFullscreen();
}

vidElem.addEventListener('click', function(e) {
  e.preventDefault();
  console.log(document.webkitFullscreenElement);
  if(document.webkitFullscreenElement == null) enterFullscreen();
  else exitFullscreen();
});

document.body.addEventListener('keypress', function(e) {
    if(e.key == " "){
      console.log(document.webkitFullscreenElement);
      // e.preventDefault();
      // enterFullscreen();
    }
});
