

const time = document.querySelector(".time");
let ssec = 0


var isPause = false;
var timer;


function timerstart(seconds) {
  clearInterval(timer)
  document.querySelector('.bac').classList.remove("hidden");
  isPause = false;
  TimerFunction(seconds);
  ssec = seconds
  timer = setInterval(() => {
    if (ssec <= 0) {
      clearInterval(timer)
    }
    ssec -= 1;
    TimerFunction(ssec);
  }, 1000)
}

const TimerFunction = (sssec) => {
  if (isPause) {
    return;
  }
  if (sssec > 0) {
    time.innerText = `${sssec > 60 ? String(Math.floor(sssec / 60)) : "00"}:${Math.floor(sssec % 60) < 10 ? "0" + String(Math.floor(sssec % 60)) : String(Math.floor(sssec % 60))}`
  } else {
    document.querySelector(".bac").classList.add("hidden");
    isPause = true
    return;
  }
}