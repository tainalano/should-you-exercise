const button = document.getElementById("action")
const dots = document.getElementById("dots")
const dot1 = document.getElementById("dot1")
const dot2 = document.getElementById("dot2")
const dot3 = document.getElementById("dot3")
const end = document.getElementById("end")


function handleHiddenText() {
    dots.classList.remove("hidden")
    button.classList.add("hidden")
    setTimeout(() => {
        dot1.classList.remove("hidden")
    },400)
    setTimeout(() => {
        dot2.classList.remove("hidden")
    },800)
    setTimeout(() => {
        dot3.classList.remove("hidden")
    },1200)
    setTimeout(() => {
        dots.classList.add("hidden")
        end.classList.remove("hidden")
    },1700)
    
}

button.addEventListener("click",handleHiddenText)