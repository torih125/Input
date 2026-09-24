let partyhat = document.getElementById("partyhat")
let necklace = document.getElementById("necklace")
let tutu = document.getElementById("tutu")
let wand = document.getElementById("wand")

let partyhatx = document.getElementById("party-hat-x")
let partyhaty = document.getElementById("party-hat-y")
let necklacex = document.getElementById("necklace-x")
let necklacey = document.getElementById("necklace-y")
let tutux = document.getElementById("tutu-x")
let tutuy = document.getElementById("tutu-y")
let wandx = document.getElementById("wand-x")
let wandy = document.getElementById("wand-y")

function changePosition(element, xInput, yInput) {
    element.style.transform = `translate(${xInput.value}px, ${yInput.value}px)`
}

partyhatx.addEventListener("input", function (event) {changePosition(partyhat, partyhatx, partyhaty);})
partyhaty.addEventListener("input", function (event) {changePosition(partyhat, partyhatx, partyhaty);})

necklacex.addEventListener("input", function (event) {changePosition(necklace, necklacex, necklacey);})
necklacey.addEventListener("input", function (event) {changePosition(necklace, necklacex, necklacey);})

tutux.addEventListener("input", function (event) {changePosition(tutu, tutux, tutuy);})
tutuy.addEventListener("input", function (event) {changePosition(tutu, tutux, tutuy);})

wandx.addEventListener("input", function (event) {changePosition(wand, wandx, wandy);})
wandy.addEventListener("input", function (event) {changePosition(wand, wandx, wandy);})

changePosition (partyhat, partyhatx, partyhaty)
changePosition (necklace, necklacex, necklacey)
changePosition (tutu, tutux, tutuy)
changePosition (wand, wandx, wandy)