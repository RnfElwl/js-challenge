const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const logBtn = document.querySelectorAll(".log button");
const inputBorder = document.querySelectorAll(".first input");
const bgColors = [
  "#DB7093",
  "#c7e366",
  "#87CEFA",
  "#EFBF44",
  "#7B68EE",
  "#BA55D3",
];

const btnColor = [
  "#DB7093",
  "#c7e366",
  "#87CEFA",
  "#FFD700",
  "#7B68EE",
  "#BA55D3",
];

const chosenImage = Math.floor(Math.random() * images.length);

const bgImage = document.querySelector(".isedol img");
const bgColor = document.querySelector("body");
bgImage.src = `./css/img/${images[chosenImage]}`;
bgColor.style.backgroundColor = `${bgColors[chosenImage]}`;
for (let i = 0; i < logBtn.length; i++) {
  logBtn[i].style.backgroundColor = `${btnColor[chosenImage]}`;
  inputBorder[i].addEventListener("focus", handleFocus);
  inputBorder[i].addEventListener("blur", handleBlur);
}

function handleFocus(event) {
  event.path[0].style.borderBottom = `2px solid ${bgColors[chosenImage]}`;
}
function handleBlur() {
  event.path[0].style.borderBottom = `2px solid rgba(116, 116, 116, 0.5)`;
}

/*inputBorder[i].style.borderBottom = ` 2px solid ${bgColors[chosenImage]}`;*/
