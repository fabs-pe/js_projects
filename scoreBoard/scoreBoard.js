let homecount = document.getElementById("home-count")
let guestcount = document.getElementById("guest-count")

countHome = 0
countGuest = 0

function add1(){
    countHome += 1
    homecount.textContent = countHome
}

function add2(){
    countHome += 2
    homecount.textContent = countHome
}

function add3(){
    countHome += 3
    homecount.textContent = countHome
}

function oneadded(){
    countGuest += 1
    guestcount.textContent = countGuest
}

function twoadded(){
    countGuest += 2
    guestcount.textContent = countGuest
}

function threeadded(){
    countGuest += 3
    guestcount.textContent = countGuest
}