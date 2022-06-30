const newYearPromise = document.querySelector(".newYearPromise");
const newyear_form = document.querySelector(".js-toDoForm"),
    newyear_Input = newyear_form.querySelector("input");
const NEW_YEAR = "2020_PROMISE";
var promise = "";

function paintPromise(e) {
    newYearPromise.innerText = e;
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = newyear_Input.value;
    newyear_Input.value = "";
    promise = currentValue;
    saveToDos();
    paintPromise(currentValue);
}

function saveToDos() {
    localStorage.setItem(NEW_YEAR, promise);
}

function loadToDos() {
    const lodedPromise = localStorage.getItem(NEW_YEAR);
    if (lodedPromise !== null) {
        newyear_form.classList.add("hidden");
        paintPromise(lodedPromise);
    } else {
        newyear_form.classList.remove("hidden");
    }
}

function init() {
    loadToDos();
    newyear_form.addEventListener("submit", handleSubmit);
}

init();