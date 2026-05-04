const input = document.getElementById("input-number")
const feetEl = document.getElementById("feet-result")
const gallonEl = document.getElementById("gallon-result")
const poundEl = document.getElementById("pound-result")


convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {
    const inputValue = input.value
    let feetValue = (inputValue * 3.281).toFixed(3)
    let gallonValue = (inputValue * 0.264).toFixed(3)
    let poundValue = (inputValue * 2.204).toFixed(3)
    feetEl.textContent = `${inputValue} meters = ${feetValue} feet`
    gallonEl.textContent = `${inputValue} liters = ${gallonValue} gallons`
    poundEl.textContent = `${inputValue} kilos = ${poundValue} pounds`
    
})
