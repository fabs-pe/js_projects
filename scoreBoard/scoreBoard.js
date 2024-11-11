let homecount = document.getElementById("home-count")
let guestcount = document.getElementById("guest-count")

count = 0

function add1(){
    count += 1
    homecount.textContent = count
}

function add2(){
    count += 2
    homecount.textContent = count
}

function add3(){
    count += 3
    homecount.textContent = count
}

function oneadded(){
    count += 1
    guestcount.textContent = count
}

function twoadded(){
    count += 2
    guestcount.textContent = count
}

function threeadded(){
    count += 3
    guestcount.textContent = count
}