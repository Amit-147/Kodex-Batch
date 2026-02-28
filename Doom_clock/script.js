function selector(classname) {
    return document.querySelector(classname)
}

// Clock Hands
let hourHand = selector(".hour-hand")
let minHand = selector(".min-hand")
let secHand = selector(".sec-hand")
let audio = new Audio("./assets/tick tick.mp3")
audio.volume = 0.5

// Clock Digits

let hourTxt = selector(".hours")
let minuteTxt = selector(".minutes")
let secondTxt = selector(".seconds")

// Update Time
function updateTime() {
    var time = new Date()
    let currentHour = time.getHours() % 12
    let currentMin = time.getMinutes()
    let currentSec = time.getSeconds()


    hourTxt.textContent = `${currentHour}`.padStart(2, "0")
    minuteTxt.textContent = `${currentMin}`.padStart(2, "0")
    secondTxt.textContent = `${currentSec}`.padStart(2, "0")

    let hdeg = (360 / 12) * currentHour
    let mdeg = (360 / 60) * currentMin
    let sdeg = (360 / 60) * currentSec

    hourHand.style.transform = `translateY(-50%) rotate(${hdeg}deg)`
    minHand.style.transform = `translateY(-50%) rotate(${mdeg}deg)`
    secHand.style.transform = `translateY(-50%) rotate(${sdeg}deg)`

   audio.currentTime = 0;
   audio.play();
}
setInterval(updateTime, 1000);