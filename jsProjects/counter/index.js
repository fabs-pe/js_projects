let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let decreaseEl = document.getElementById("count-el")
let totalEl = document.getElementById("totals-el")

let count = 0
let total = 0  // Create a new variable to store the running total

function increment() {
    count += 1
    countEl.textContent = count
}

function decrease(){
    count -= 1
    decreaseEl.textContent = count
}

function save(){
    let countStr = count + " | "
    saveEl.textContent += countStr
    total += count  // Add the current count to the total
    totalEl.textContent = "Total: " + total  // Update totalEl with the new total
    count = 0  // Reset the count after saving
    countEl.textContent = 0
}


function reset() {
    saveEl.textContent = "Previous entires: "
    totalEl.textContent = "Total "
    console.log("cleared")

}



