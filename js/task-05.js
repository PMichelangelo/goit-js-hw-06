
const input = document.querySelector("#name-input")
const output = document.querySelector("#name-output")

input.addEventListener("input", function () {
    const trimmmedValue = input.value.trim();
    output.textContent = trimmmedValue || "Anonymous"
})