const images = ["0.jpg", "1.png", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const bgColors = [
  "#DB7093",
  "#c7e366",
  "#87CEFA",
  "#FFD700",
  "#7B68EE",
  "#BA55D3",
];

const chosenImage = Math.floor(Math.random() * images.length);

const bgImage = document.querySelector("#isedol");
const bgColor = document.querySelector("body");
bgImage.classList.add("bg-img");
bgColor.style.backgroundColor = `${bgColors[chosenImage]}`;
bgImage.style.backgroundImage = `url(img/${images[chosenImage]})`;
