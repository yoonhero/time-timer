function plusZeroToStr(str) {
  if (str.length <= 1) {
    return "0" + str
  }
  return str
}

analysisDate = new Date()
let analysisyear = plusZeroToStr(String(analysisDate.getFullYear()))
let analysismonth = plusZeroToStr(String(analysisDate.getMonth() + 1))

let analysisday = plusZeroToStr(String(analysisDate.getDate()))

let todayDate = analysisyear + analysismonth + analysisday
const CLOCK = todayDate + "clock"
function clocktimer() {
  let time = localStorage.getItem(CLOCK)
  if (time === null) {
    time = 0
  }
  time = Math.floor(time)
  let timer = setInterval(() => {
    time += 1
    localStorage.setItem(CLOCK, time)
  }, 1000)

}



clocktimer()
