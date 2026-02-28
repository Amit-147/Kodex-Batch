// ## 7. Mini Gambling UI

// Generate 3 random numbers between 1--9. Display all numbers dynamically.
// If all three numbers are the same, show "Jackpot". Otherwise display.

var box1 = document.querySelector(".box1")
var box2 = document.querySelector(".box2")
var box3 = document.querySelector(".box3")
var btn = document.querySelector("button")
var h1 = document.querySelector("h1")

btn.addEventListener("click", function () {
    var num1 = Math.floor(Math.random() * 9) + 1
    var num2 = Math.floor(Math.random() * 9) + 1
    var num3 = Math.floor(Math.random() * 9) + 1

    box1.textContent = num1
    box2.textContent = num2
    box3.textContent = num3
    if (num1 == num2 && num1 == num3) {
        h1.innerHTML = "JackPot!!🎉🎉"
    }
    else {
        h1.innerHTML = "You Loose Try Again.."

    }

})