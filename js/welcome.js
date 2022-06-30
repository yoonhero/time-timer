const form = document.querySelector(".js-welcome-form"),
  input = form.querySelector("input");
// const changeNameForm = document.querySelector(".js-changeName-form"),
//     changeNameInput = changeNameForm.querySelector("input");
// const changeNameContainer = document.querySelector(".changeName");
const js_welcome_button = document.querySelector(".js-welcome-button")
const modal = document.querySelector(".welcome_modal");
const modal_today = document.querySelector(".check_today_modal");
const text = document.querySelector(".currentUser");
const today_date = document.querySelector(".today_date");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function getTimeStamp() {
  var d = new Date();
  var s =
    leadingZeros(d.getFullYear(), 4) +
    "-" +
    leadingZeros(d.getMonth() + 1, 2) +
    "-" +
    leadingZeros(d.getDate(), 2);

  return s;
}

function leadingZeros(n, digits) {
  var zero = "";
  n = n.toString();

  if (n.length < digits) {
    for (i = 0; i < digits - n.length; i++) zero += "0";
  }
  return zero + n;
}

function today() {
  const currentUser = localStorage.getItem(USER_LS);
  text.innerText = currentUser;
  modal_today.classList.remove("hidden");
  today_date.innerText = getTimeStamp();
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {

  event.preventDefault();
  const currentValue = input.value;
  saveName(currentValue);
  modal.classList.add("hidden");
  today();
}
function changeNameSubmit(event) {
  changeNameContainer.classList.add("hidden");
  event.preventDefault();
  const currentValue = changeNameInput.value;
  saveName(currentValue);
  modal.classList.add("hidden");
  today();
}
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
  js_welcome_button.addEventListener("submit", handleSubmit)
}

function loadname() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    modal.classList.remove("hidden");
    modal_today.classList.add("hidden");
    //he is not
    askForName();
  } else {
    //he is
    modal.classList.add("hidden");
    text.innerText = currentUser;
    today();
  }
}



function init() {
  loadname();
}

init();

function exit() {
  modal_today.classList.add("hidden");
}

// function changeUserName() {
//     changeNameContainer.classList.remove("hidden");
//     changeNameForm.addEventListener("submit", changeNameSubmit);
// }



