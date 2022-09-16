const mole1 = document.getElementById("mole1")
const mole2 = document.getElementById("mole2")
const mole3 = document.getElementById("mole3")
const mole4 = document.getElementById("mole4")
const mole5 = document.getElementById("mole5")
const mole6 = document.getElementById("mole6")
const mole7 = document.getElementById("mole7")
const mole8 = document.getElementById("mole8")
const mole9 = document.getElementById("mole9")

const button = document.getElementById("start")

let score = 0
let randomNumber = 0
let activeMole

const randomMole = () => {
    randomNumber = Math.floor(Math.random() * 9) + 1;
    activeMole = document.getElementById("mole" + randomNumber)
    activeMole.style.visibility="visible";
}

button.addEventListener("click", () => {
    window.confirm("Click the moles before they disappear!")
    randomMole()

})

activeMole.addEventListener("click", () => {
    activeMole.style.visibility="hidden";
    randomMole()
})


const gameLoop = () => {
    
}