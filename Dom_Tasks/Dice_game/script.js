// ## 1. Dice Game

// Create two dice images dynamically using `document.createElement()`. Use
// `Math.random()` to generate numbers (1--6). Display both dice results
// and show the winner based on the higher number. Render everything
// dynamically using `append()` or `appendChild()`.

var btn = document.querySelector("button");
var h1 = document.querySelector("h1");
var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var img1 = document.createElement("img");
var img2 = document.createElement("img");
img1.style.height = "100%"
img1.style.width = "100%"
// img1.style.objectFit = "cover"
img1.style.borderRadius = "50px"
img2.style.height = "100%"
img2.style.width = "100%"
// img2.style.objectFit = "cover"
img2.style.borderRadius = "50px"


box1.appendChild(img1)
box2.appendChild(img2)

var array = ["./Screenshot 2026-02-19 133903.png", "./Screenshot 2026-02-19 133913.png", "./Screenshot 2026-02-19 133922.png", "./Screenshot 2026-02-19 133932.png", "./Screenshot 2026-02-19 133941.png", "./Screenshot 2026-02-19 133949.png"]

btn.addEventListener("click", function () {
    var randomIndex = Math.floor(Math.random() * array.length)
    var randomIndex2 = Math.floor(Math.random() * array.length)
    var dice1 = array[randomIndex]
    var dice2 = array[randomIndex2]
    img1.src = dice1;
    img2.src = dice2;
    if (img1.src > img2.src) {
        h1.innerHTML = "Dice 1 is winner 🎉🎉"
    }
    else if (img1.src < img2.src) {
        h1.innerHTML = "Dice 2 is winner🎉🎉"

    }
    else {
        h1.innerHTML = "Match DRAW!!!"
    }
});