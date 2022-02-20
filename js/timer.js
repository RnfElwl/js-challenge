const timer = document.querySelector(".count-down");
const reset = document.querySelector(".reset-form");
const startBtn = document.querySelector(".count-down__btn");
const resetBtn = document.querySelector(".count-down__reset");
const timerText = document.querySelector(".timer-text");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const alarm = new Audio("mp3/pipi.mp3");

function setTime(event) {
  event.preventDefault();
  startBtn.classList.add(HIDDEN_CLASSNAME);
  resetBtn.classList.remove(HIDDEN_CLASSNAME);
  let inputHour = parseInt(hours.value);
  let inputMinute = parseInt(minutes.value);
  let inputSecond = parseInt(seconds.value);

  timerText.innerText = `${String(inputHour).padStart(2, "0")}:${String(
    inputMinute
  ).padStart(2, "0")}:${String(inputSecond).padStart(2, "0")}`;
  reset.addEventListener("submit", resetTime);
  function resetTime(event) {
    event.preventDefault();
    inputSecond = 0;
    inputMinute = 0;
    inputHour = 0;
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
    startBtn.classList.remove(HIDDEN_CLASSNAME);
    resetBtn.classList.add(HIDDEN_CLASSNAME);
    timerText.innerText = `${String(inputHour).padStart(2, "0")}:${String(
      inputMinute
    ).padStart(2, "0")}:${String(inputSecond).padStart(2, "0")}`;
    clearInterval(timer);
  }

  function startTimer() {
    if (inputSecond !== 0) {
      inputSecond -= 1;
    } else if (inputMinute !== 0) {
      inputSecond = 59;
      inputMinute -= 1;
    } else if (inputHour !== 0) {
      inputSecond = 59;
      inputMinute = 59;
      inputHour -= 1;
    } else {
      alarm.play();
      startBtn.classList.remove(HIDDEN_CLASSNAME);
      resetBtn.classList.add(HIDDEN_CLASSNAME);
      timerText.innerText = `${String(inputHour).padStart(2, "0")}:${String(
        inputMinute
      ).padStart(2, "0")}:${String(inputSecond).padStart(2, "0")}`;
      clearInterval(timer);
    }

    timerText.innerText = `${String(inputHour).padStart(2, "0")}:${String(
      inputMinute
    ).padStart(2, "0")}:${String(inputSecond).padStart(2, "0")}`;
  }
  const timer = setInterval(startTimer, 1000);
}

timer.addEventListener("submit", setTime);
