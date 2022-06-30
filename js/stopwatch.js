function plusZeroToStr(str) {
  if (str.length <= 1) {
    return "0" + str;
  }
  return str;
}

let date = new Date();
let year = plusZeroToStr(String(date.getFullYear()));
let month = plusZeroToStr(String(date.getMonth() + 1));

let day = plusZeroToStr(String(date.getDate()));

let today = year + month + day;

function dark() {
  var element = document.body;
  var button = document.querySelector("#darkmode");
  element.classList.toggle("dark-mode");
}

const text = document.querySelector(".egg");

var stTime = 0;
var endTime = 0;
var timerStart;
var min;
var sec;
var milisec;
var startBtn = document.getElementById("testStartBtn");
var stopBtn = document.getElementById("testStopBtn");

startBtn.addEventListener("click", function () {
  this.classList.add("hidden");
  // console.log(stTime);
  if (!stTime) {
    stTime = Date.now(); // 최초 START
  } else {
    // console.log("restart", Date.now() - endTime);
    stopBtn.innerText = "STOP";
    stTime += Date.now() - endTime; // RESTART
  }
  timerStart = setInterval(function () {
    var nowTime = new Date(Date.now() - stTime);
    min = addZero(nowTime.getMinutes());
    sec = addZero(nowTime.getSeconds());
    milisec = addZero(Math.floor(nowTime.getMilliseconds() / 10));
    document.getElementById("postTestMin").innerText = min;
    document.getElementById("postTestSec").innerText = sec;
    document.getElementById("postTestMilisec").innerText = milisec;
  }, 1);
});

function StopStopWatch() {
  //text.classList.remove("hidden");
  if (timerStart) {
    clearInterval(timerStart); // STOP
    if (stopBtn.innerText == "STOP") {
      endTime = Date.now();
      stopBtn.innerText = "RESET";
      startBtn.classList.remove("hidden");
      startBtn.innerText = "RESTART";
    } else {
      // RESET
      stTime = 0;
      min = 0;
      sec = 0;
      milisec = 0;
      document.getElementById("postTestMin").innerText = "00";
      document.getElementById("postTestSec").innerText = "00";
      document.getElementById("postTestMilisec").innerText = "00";
      startBtn.innerText = "START";
      stopBtn.innerText = "STOP";
      timerStart = null;
    }
  }
}

stopBtn.addEventListener("click", () => StopStopWatch());

window.addEventListener("mousemove", () => {
  if (timerStart) {
    clearInterval(timerStart); // STOP
    endTime = Date.now();
    // console.log("End Time: " + endTime);
    stopBtn.innerText = "RESET";
    startBtn.classList.remove("hidden");
    startBtn.innerText = "RESTART";
    timerStart = null;
  }
});

function addZero(num) {
  return num < 10 ? "0" + num : "" + num;
}

const STOPWATCH = today + "stopwatch";
function stopwatch() {
  let time = localStorage.getItem(STOPWATCH);
  if (time === null) {
    time = 0;
  }
  time = Math.floor(time);
  setInterval(() => {
    time += 1;
    localStorage.setItem(STOPWATCH, time);
  }, 1000);
}
stopwatch();
