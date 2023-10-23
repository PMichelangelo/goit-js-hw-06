
const counter = document.querySelector("#counter")
const valueSpan = document.querySelector("#value")
const btnIncr = document.querySelector('[data-action="increment"]')
const btnDecr = document.querySelector('[data-action="decrement"]')

let counterValue = 0;
valueSpan.textContent = counterValue;


btnIncr.addEventListener("click", function increment() {
    counterValue += 1;
    valueSpan.textContent = counterValue;
});

btnDecr.addEventListener("click", function decrement() {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
});

