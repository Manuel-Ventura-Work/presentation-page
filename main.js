const espanol = document.getElementById("span")
const ingles = document.getElementById("english")
const changebutton = document.getElementById("changelanguage1")
const changebutton2 = document.getElementById("changelanguage2")

function language1() {
    espanol.style.display = "none"
    ingles.style.display = "inline"
    changebutton.style.display = "none"
    changebutton2.style.display = "inline"
}
function language2() {
    espanol.style.display = "inline"
    ingles.style.display = "none"
    changebutton.style.display = "inline"
    changebutton2.style.display = "none"
}