
const loginForm = document.querySelector(".login-form")

loginForm.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault()

    const emailInput = event.currentTarget.elements.email
    const passwordInput = event.currentTarget.elements.password

    const emailValue = emailInput.value
    const passwordValue = passwordInput.value

    if (!emailValue || !passwordValue) {
        alert("Please fill all the fields!")
    } else {
        const user = {
            email: emailValue,
            password: passwordValue
        };

        console.log(user)
        event.currentTarget.reset()
        
    }

}
