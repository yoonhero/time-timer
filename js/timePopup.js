var timeList = [];

var time_Text = document.getElementById("time_Text");
var todo_Text = document.getElementById("todo_Text");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modal__overlay");
const closeBtn = modal.querySelector("button");
/*if (lodedToDos !== null) {
    const parsedToDos = JSON.parse(lodedToDos);
    console.log(parsedToDos[0]);
    for (var i = 0; i < parsedToDos.length; i++) {
        for (const [keys, values] of Object.entries(parsedToDos[i])) {
            if (keys == "time") {
                timeList.push(values);
            }
        }
    }
    console.log(timeList);
}*/

function date() {
  var timeList = [];
  var todoList = [];
  const lodedToDos = localStorage.getItem(TODOS_LS);
  if (lodedToDos !== null) {
    const parsedToDos = JSON.parse(lodedToDos);
    //console.log(parsedToDos[0]);
    for (var i = 0; i < parsedToDos.length; i++) {
      for (const [keys, values] of Object.entries(parsedToDos[i])) {
        if (keys == "time") {
          timeList.push(values);
        }
        if (keys == "text") {
          todoList.push(values);
        }
      }
    }
  }

  let today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var times = "";
  if (String(hours).length == 1) {
    times = "0" + String(hours);
  } else {
    times = times + String(hours);
  }
  times = times + ":";

  if (String(minutes).length == 1) {
    times = times + "0" + String(minutes);
  } else {
    times = times + String(minutes);
  }
  for (var x = 0; x < timeList.length; x++) {
    if (timeList[x] == times) {
      todo_Text.innerText = todoList[x];
      time_Text.innerText = timeList[x];
      modal.classList.remove("hidden");
    }
  }
}
date();
const closeModal = () => {
  modal.classList.add("hidden");
};
closeBtn.addEventListener("click", closeModal);
date();
timecheck = setInterval(date, 60000);