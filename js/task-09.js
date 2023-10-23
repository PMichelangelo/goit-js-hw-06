function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector(".widget")
const colorText = document.querySelector(".color")
const btn = document.querySelector(".change-color")

btn.addEventListener("click", function () {
  widget.style.backgroundColor = getRandomHexColor();
  colorText.textContent = getRandomHexColor();
})

