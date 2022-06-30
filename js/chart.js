
const chartDateText = document.querySelector(".chartDate")


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

var ctx = document.getElementById('myChart').getContext('2d');
let timetimer = Math.floor(localStorage.getItem(today + "timetimer"))
let stopwatch = Math.floor(localStorage.getItem(today + "stopwatch"))
let clock = Math.floor(localStorage.getItem(today + "clock"))
let todotime = Math.floor(localStorage.getItem(today + "todotime"))

let data = {
  labels: ["timetimer", "stopwatch", "clock", "todotime"],
  datasets: [{
    label: '공부시간(초)',
    data: [timetimer, stopwatch, clock, todotime],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

let myChart = new Chart(ctx, {
  type: 'radar',
  data: data,
  options: {
    plugins: {
      filler: {
        propagate: false
      },
      'samples-filler-analyser': {
        target: 'chart-analyser'
      }
    },
    interaction: {
      intersect: false
    }
  }
});

function changechartdata(timetimer, stopwatch, clock, todotime) {
  return {
    labels: ["timetimer", "stopwatch", "clock", "todotime"],
    datasets: [{
      label: '공부시간(초)',
      data: [timetimer, stopwatch, clock, todotime],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

}






function changeChartText(text) {

  chartDateText.innerText = text
}

function predayChart() {
  date = (d => new Date(d.setDate(d.getDate() - 1)))(date);
  let year = plusZeroToStr(String(date.getFullYear()))
  let month = plusZeroToStr(String(date.getMonth() + 1))

  let day = plusZeroToStr(String(date.getDate()))

  let today = year + month + day

  changeChartText(today)
  let timetimer = Math.floor(localStorage.getItem(today + "timetimer"))
  let stopwatch = Math.floor(localStorage.getItem(today + "stopwatch"))
  let clock = Math.floor(localStorage.getItem(today + "clock"))
  let todotime = Math.floor(localStorage.getItem(today + "todotime"))
  data = changechartdata(timetimer, stopwatch, clock, todotime)
  myChart.destroy();
  console.log(data)

  myChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: {
      plugins: {
        filler: {
          propagate: false
        },
        'samples-filler-analyser': {
          target: 'chart-analyser'
        }
      },
      interaction: {
        intersect: false
      }
    }
  });
}

function nextdayChart() {
  date = (d => new Date(d.setDate(d.getDate() + 1)))(date);
  let year = plusZeroToStr(String(date.getFullYear()))
  let month = plusZeroToStr(String(date.getMonth() + 1))

  let day = plusZeroToStr(String(date.getDate()))

  let today = year + month + day

  changeChartText(today)
  let timetimer = Math.floor(localStorage.getItem(today + "timetimer"))
  let stopwatch = Math.floor(localStorage.getItem(today + "stopwatch"))
  let clock = Math.floor(localStorage.getItem(today + "clock"))
  let todotime = Math.floor(localStorage.getItem(today + "todotime"))
  data = changechartdata(timetimer, stopwatch, clock, todotime)

  myChart.destroy();
  myChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: {
      plugins: {
        filler: {
          propagate: false
        },
        'samples-filler-analyser': {
          target: 'chart-analyser'
        }
      },
      interaction: {
        intersect: false
      }
    }
  });
}


function init() {
  changeChartText(today)
}

init()



// //const STUDY_LS = "study_datas";
// var chart_modal = document.querySelector(".chart_modal");
// /*
// var time = Date.now();
// var study_time = 0;
// let study_datas = [];
// var today_dates = getTimeStamp();

// function getTimeStamp() {
//     var d = new Date();
//     var s =
//         leadingZeros(d.getFullYear(), 4) +
//         "-" +
//         leadingZeros(d.getMonth() + 1, 2) +
//         "-" +
//         leadingZeros(d.getDate(), 2);

//     return s;
// }

// function leadingZeros(n, digits) {
//     var zero = "";
//     n = n.toString();

//     if (n.length < digits) {
//         for (i = 0; i < digits - n.length; i++) zero += "0";
//     }
//     return zero + n;
// }

// function save() {
//     localStorage.setItem(STUDY_LS, JSON.stringify(study_datas));
// }

// function loadData() {
//     loadeddatas = localStorage.getItem(STUDY_LS);
//     if (loadeddatas != null) {
//         save();
//     } else {
//         save();
//     }

//     //saveName();
// }

// function init() {
//     loadData();
// }

// init();

// study_datas = localStorage.getItem(STUDY_LS);

// var endTime = Date.now();
// study_time = endTime - time;
// const dataObj = {
//     date: today_dates,
//     time: study_time,
//     id: study_datas.length + 1,
// };
// save();*/

// function exit_studychart() {
//     chart_modal.classList.add("hidden");
// }

// function chart() {
//     chart_modal.classList.remove("hidden");
// }

// var ctx = document.getElementById("myChart").getContext("2d");
// var myChart = new Chart(ctx, {
//     type: "line",
//     data: {
//         labels: ["12/30"],
//         datasets: [{
//             label: "",
//             data: [1],
//             backgroundColor: ["rgba(255, 99, 132, 0.2)"],
//             borderColor: [
//                 "rgba(255, 99, 132, 1)",
//                 "rgba(54, 162, 235, 1)",
//                 "rgba(255, 206, 86, 1)",
//                 "rgba(75, 192, 192, 1)",
//                 "rgba(153, 102, 255, 1)",
//                 "rgba(255, 159, 64, 1)",
//             ],
//             borderWidth: 1,
//         }, ],
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true,
//                 },
//             }, ],
//         },
//     },
// });

// var timedate = [{ date: "12/24", time: 1 }];


