function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//const widget = document.querySelector(".widget")
const colorText = document.querySelector(".color")
const btn = document.querySelector(".change-color")

btn.addEventListener("click", function () {
  const randomColor = getRandomHexColor()
  document.body.style.backgroundColor = randomColor;
  colorText.textContent = getRandomHexColor();
})

