const clock = document.querySelector("#clock");
const hourBar = document.querySelector("#hour");
const minuteBar = document.querySelector("#minute");
const secondBar = document.querySelector("#second");

const sayHello = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  if (hours >= 12) {
    clock.innerText = `오후 ${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  } else {
    clock.innerText = `오전 ${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
  hourBar.style.transform = `rotate(${hours * 30 + (minutes * 6) / 12}deg)`;
  minuteBar.style.transform = `rotate(${minutes * 6 + (seconds * 6) / 60}deg)`;
  secondBar.style.transform = `rotate(${seconds * 6}deg)`;
};

setInterval(sayHello, 1000);
