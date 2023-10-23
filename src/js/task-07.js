
const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text")



fontSizeControl.addEventListener("input", function () { 
    const textSize = fontSizeControl.value + "px";
    text.style.fontSize = textSize
})

