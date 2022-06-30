function plusZeroToStr(str) {
  if (str.length <= 1) {
    return "0" + str
  }
  return str
}

let date = new Date()
let year = plusZeroToStr(String(date.getFullYear()))
let month = plusZeroToStr(String(date.getMonth() + 1))

let day = plusZeroToStr(String(date.getDate()))

let today = year + month + day


const HELLO_TIMER = today + "timetimer"
function starttimetimer() {
  let time1 = localStorage.getItem(HELLO_TIMER)

  if (time1 === null) {
    time1 = 0
  }
  time1 = Math.floor(time1)
  setInterval(() => {
    let loc = location.href.split("/");
    if (loc[loc.length - 1] === "time-timer.html") {
      time1 += 1
      localStorage.setItem(HELLO_TIMER, time1)
    }


  }, 1000)
}
let loc = location.href.split("/");
if (loc[loc.length - 1] === "time-timer.html") {
  starttimetimer()
}
