var y = Math.floor(Math.random() * 5 + 1);

function playAudio() {
  var x = document.getElementById(`myAudio${y}`);
  x.play();
}

function pauseAudio() {
  var x = document.getElementById(`myAudio${y}`);
  x.pause();
  if (y >= 5) {
    y = 1;
  } else {
    y += 1;
  }
}


let i = 1
var music = document.querySelector(`#myAudio${i}`)
var playBtn = document.querySelector('.startMusic')
var seekbar = document.querySelector('.seekbar')

function previousMusic() {
  music.pause();
  if (i <= 1) {
    i = 5;
  } else {
    i -= 1;
  }
  music = document.querySelector(`#myAudio${i}`)
  playBtn.innerHTML = '<i class="fas fa-play"></i>'
}

function nextPlay() {
  music.pause();
  if (i >= 5) {
    i = 1;
  } else {
    i += 1;
  }
  music = document.querySelector(`#myAudio${i}`)
  playBtn.innerHTML = '<i class="fas fa-play"></i>'
}

function handlePlay() {
  if (music.paused) {
    music.play();
    playBtn.innerHTML = '<i class="fas fa-stop"></i>'
  } else {
    music.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>'

  }
  music.addEventListener('ended', function () {
    playBtn.innerHTML = '<i class="fas fa-stop"></i>'
    music.currentTime = 0
  });
}

music.onloadeddata = function () {
  seekbar.max = music.duration
}
music.ontimeupdate = function () { seekbar.value = music.currentTime }
handleSeekBar = function () { music.currentTime = seekbar.value }
