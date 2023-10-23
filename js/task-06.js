
const validationInput = document.querySelector("#validation-input")

validationInput.addEventListener("blur", function () {
    const inputValue = validationInput.value;
    const dataLength = parseInt(validationInput.getAttribute("data-length"));

    if (inputValue.length === dataLength) {
        validationInput.classList.remove("invalid")
        validationInput.classList.add("valid")
    } else {
        validationInput.classList.remove("valid")
        validationInput.classList.add("invalid")
    }
})