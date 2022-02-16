const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const logBtn = document.querySelector(".log button");
const bgColors = [
  "#DB7093",
  "#c7e366",
  "#87CEFA",
  "#FFD700",
  "#7B68EE",
  "#BA55D3",
];

const btnColor = [
  "#D17093",
  "#c1e366",
  "#87CEFA",
  "#FFD700",
  "#7B68EE",
  "#BA55D3",
];

const chosenImage = Math.floor(Math.random() * images.length);

const bgImage = document.querySelector(".isedol img");
console.log(bgImage);
const bgColor = document.querySelector("body");
bgImage.src = `./css/img/${images[chosenImage]}`;
bgColor.style.backgroundColor = `${bgColors[chosenImage]}`;

logBtn.style.backgroundColor = `${btnColor[chosenImage]}`;
