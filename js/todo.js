const toDoform = document.querySelector(".js-toDoForm"),
  toDoInput = toDoform.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modal__overlay");
const closeBtn = modal.querySelector("button");

let draggables = document.querySelectorAll('.draggable')


var toDoTimeInput = document.getElementById("time");
var timeSetting_showhide = document.getElementById("timebtn");

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

function drawDashboardDate(year, month, day) {
  document.querySelector(".dashboardYear").innerText = year + "월"
  document.querySelector(".dashboardMonth").innerText = month + "월"
  document.querySelector(".dashboardDay").innerText = day + "월"
}
drawDashboardDate(year, month, day)
let TODOS_LS = today + "toDos";
let toDos = [];

overlay.addEventListener("click", () => {
  modal.classList.add("hidden")
})

const showModal = () => {
  modal.classList.remove("hidden")
}
const closeModal = () => {
  modal.classList.add("hidden");
};
closeBtn.addEventListener("click", closeModal);

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode.parentNode
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function doneToDo(event) {
  const div = event.target
  const li = div.parentNode;
  let found = []
  if (li.id == "") {
    return;
  }
  toDos.map(element => {
    if (element.id == li.id) {
      found = element
    }
  })
  if (!found.done) {
    div.className = "";
    div.classList.add("toDoContainer")
    randomColor = "toDo" + String(Math.floor(Math.random() * 5) + 1)
    div.classList.add(randomColor)
    // div.classList.add("todoDone")
  } else {
    div.className = "";
    div.classList.add("toDoContainer")
  }
  found.done = !found.done

  toDos[found.id - 1] = found
  // toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  draggables = document.querySelectorAll('.draggable')

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging')
    })
  })
}


function cleaning() {
  toDos = []
  toDoList.innerHTML = ""
  loadToDos()
}

function yesterdaytodo() {
  date = (d => new Date(d.setDate(d.getDate() - 1)))(date);
  year = plusZeroToStr(String(date.getFullYear()))
  month = plusZeroToStr(String(date.getMonth() + 1))

  day = plusZeroToStr(String(date.getDate()))

  today = year + month + day
  TODOS_LS = today + "toDos";
  drawDashboardDate(year, month, day)
  cleaning()
}

function tomorrowtodo() {
  date = (d => new Date(d.setDate(d.getDate() + 1)))(date);
  year = plusZeroToStr(String(date.getFullYear()))
  month = plusZeroToStr(String(date.getMonth() + 1))

  day = plusZeroToStr(String(date.getDate()))

  today = year + month + day


  TODOS_LS = today + "toDos";
  drawDashboardDate(year, month, day)
  cleaning()
}

function paintToDo(text, done) {
  const li = document.createElement("li");
  const div = document.createElement("div")
  div.classList.add("toDoContainer")
  if (done) {
    randomColor = "toDo" + String(Math.floor(Math.random() * 5) + 1)
    div.classList.add(randomColor)
  }

  li.classList.add("draggable")
  li.setAttribute('draggable', true);
  const dot = document.createElement("div")
  dot.classList.add("dot")
  randomDot = "dot" + String(Math.floor(Math.random() * 4) + 1)
  dot.classList.add(randomDot)
  const delBtn = document.createElement("button");
  // delBtn.innerText = "❌";
  delBtn.innerHTML = '<i class="fas fa-trash"></i>'
  delBtn.addEventListener("click", deleteToDo);
  div.addEventListener("click", doneToDo)
  delBtn.classList.add("todo_delete")
  const span1 = document.createElement("span");
  span1.classList.add("todo_text")
  const span2 = document.createElement("span");
  span2.classList.add("todo_time")
  const newId = toDos.length + 1;
  li.id = newId;
  span1.innerText = text;
  // span2.innerText = time;

  div.appendChild(dot);
  div.appendChild(span1);
  div.appendChild(span2);
  div.appendChild(delBtn)
  li.appendChild(div)
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: toDos.length + 1,
    done: done,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  // var x = document.getElementById("time").value;
  paintToDo(currentValue, null);
  toDoInput.value = "";
  // document.getElementById("time").value = "";
  saveToDos();
}

function loadToDos() {
  const lodedToDos = localStorage.getItem(TODOS_LS);
  if (lodedToDos !== null) {
    const parsedToDos = JSON.parse(lodedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text, toDo.done);
    });
  }
}

function init() {
  loadToDos();
  // toDoTimeInput.style.display = "none";
  toDoform.addEventListener("submit", handleSubmit);
}

function timeSettingShow() {
  if (timeSetting_showhide.innerText != "가리기") {
    toDoTimeInput.style.display = "block";
    timeSetting_showhide.innerText = "가리기";
  } else {
    toDoTimeInput.style.display = "none";
    timeSetting_showhide.innerText = "시간설정하기";
  }
}



init();



const container1 = document.querySelector('.js-toDoList')


draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})

container1.addEventListener('dragover', e => {
  e.preventDefault()
  const afterElement = getDragAfterElement(container1, e.clientY)
  const draggable = document.querySelector('.dragging')
  if (afterElement == null) {
    container1.appendChild(draggable)
  } else {
    container1.insertBefore(draggable, afterElement)
  }
})

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}

function plusZeroToStr(str) {
  if (str.length <= 1) {
    return "0" + str
  }
  return str
}

let timerdate = new Date()
let timeryear = plusZeroToStr(String(date.getFullYear()))
let timermonth = plusZeroToStr(String(date.getMonth() + 1))

let timerday = plusZeroToStr(String(date.getDate()))

let timertoday = timeryear + timermonth + timerday

const TO_DO_TIME = timertoday + "todotime"
function todotime() {
  let time = localStorage.getItem(TO_DO_TIME)
  if (time === null) {
    time = 0
  }
  time = Math.floor(time)
  setInterval(() => {
    time += 1
    localStorage.setItem(TO_DO_TIME, time)
  }, 1000)
}
todotime()
