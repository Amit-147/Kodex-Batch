// Take user input (1--50). Generate a random number using `Math.ceil()`.
// If the number matches user input, display "You Won" otherwise "Try
// Again". Update result dynamically in the DOM.

var input = document.querySelector("input")
var btn = document.querySelector("button")
var h1 = document.querySelector("h1")

btn.addEventListener("click", function () {
    var randomValue = Math.ceil(Math.random() * 51)
    console.log(randomValue);
    if (input.value == "" || input.value > 50 || input.value < 1) {
        h1.innerHTML = "Select the Number between 1-50 Then Play."
    }
    else {
        if (input.value == randomValue) {
            h1.innerHTML = "You Won 🎉🎉🎉"
        }
        else {
            h1.innerHTML = "Try Again!!!"
        }
    }
    input.value = ""


})