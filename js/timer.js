const timer = document.querySelector(".count-down");
const timerInput = document.querySelector(".count-down input");

const countDown = (event) => {
  event.preventDefault();
  const now = new Date();

  if (hour === 0 && minute === 0 && seconds === 0) {
    return 0;
  }
  setInterval(countDown, 1000);
};

timer.addEventListener("submit", countDown);
