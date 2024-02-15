import { saveToLocalStorage, getLocalStorage, removeFromLocalStorage } from "./localstorage.js";

let setInput = document.getElementById("setInput");
let setBtn = document.getElementById("setBtn");
let budgetShow = document.getElementById("budgetShow");
let expName = document.getElementById("expName");
let expPrice = document.getElementById("expPrice");
let addExp = document.getElementById("addExp");

setInput.addEventListener('keypress', (e) => {
    setInput.value = e.target.value
})

setBtn.addEventListener('click', () => {
    budgetShow.textContent = setInput.value
})