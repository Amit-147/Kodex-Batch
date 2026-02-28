// Q-1) Text Change on Button Click
// var btn = document.getElementById("btn");
// var p = document.querySelector("p");

// btn.addEventListener("click", function() {
//     p.textContent = "Welcome to JavaScript DOM manipulation!";
// });


// Q-2) Change Box Color on Click
// var btn = document.getElementById("btn");
// var box = document.getElementById("box");
// let count = 0;

// btn.addEventListener("click", function() {
//     count++;
//     if (count === 1) {
//         box.style.backgroundColor = "red";
//     } else if (count === 2) {
//         box.style.backgroundColor = "green";
//     } else{
//         box.style.backgroundColor = "blue";
//         count = 0;
//     }
// });


// Q-3) Show and Hide a Box
// var btn = document.getElementById("btn");
// var box = document.getElementById("box");
// let isVisible = true;

// btn.addEventListener("click", function() {
//     if (isVisible) {
//         box.style.display = "none"; 
//         btn.textContent = "Show Box";
//     } else {
//         box.style.display = "block";
//         btn.textContent = "Hide Box";
//     }
//     isVisible = !isVisible;
// });


// Q-4) Rotate a Box using Buttons.
// var leftRotate = document.getElementById("left");
// var rightRotate = document.getElementById("right");
// var box = document.getElementById("box");
// let angle = 0;

// leftRotate.addEventListener("click", function() {
//     angle -= 45; 
//     box.style.transform = "rotate(" + angle + "deg)";
// });

// rightRotate.addEventListener("click", function() {
//     angle += 45; 
//     box.style.transform = "rotate(" + angle + "deg)";
// });


// Q-5) Number Increment and Decrement and number should not be less than 0
// var incrementBtn = document.getElementById("increment");
// var decrementBtn = document.getElementById("decrement");
// var numberDisplay = document.getElementById("number");
// let number = 0;

// incrementBtn.addEventListener("click", function() {
//     number++;
//     numberDisplay.textContent = number;
// });

// decrementBtn.addEventListener("click", function() {
//     if (number > 0) {
//         number--;
//         numberDisplay.textContent = number;
//     }
// });


// Q-6) Light and Dark Mode Toggle
// var toggleBtn = document.getElementById("toggle");
// var body = document.body;
// toggleBtn.addEventListener("click", function() {
//     body.classList.toggle("dark-mode");
//     if (body.classList.contains("dark-mode")) {
//         toggleBtn.textContent = "Switch to Light Mode";
//     } else {
//         toggleBtn.textContent = "Switch to Dark Mode";
//     }
// });


// Q-7) Show Input Text on Screen
// var input = document.getElementById("input");
// var display = document.getElementById("display");
// input.addEventListener("input", function() {
//     display.textContent = input.value;
// });


// Q-8) Change Color on Mouse Hover
// var box = document.getElementById("box");
// box.addEventListener("mouseover", function() {
//     box.style.backgroundColor = "yellow";
// });
// box.addEventListener("mouseout", function() {
//     box.style.backgroundColor = "lightblue";
// });


// Q-9) Button Works Only Once
// var btn = document.getElementById("btn");
// btn.addEventListener("click", function() {
//     alert("Button clicked!");
//     btn.disabled = true; 
// });


// Q-10) Create Traffic Light
// var redLight = document.getElementById("red");
// var yellowLight = document.getElementById("yellow");
// var greenLight = document.getElementById("green");
// var redBtn = document.getElementById("redBtn");
// var yellowBtn = document.getElementById("yellowBtn");
// var greenBtn = document.getElementById("greenBtn");

// redBtn.addEventListener("click", function() {
//     redLight.style.backgroundColor = "red";
//     yellowLight.style.backgroundColor = "gray";
//     greenLight.style.backgroundColor = "gray";
// });

// yellowBtn.addEventListener("click", function() {
//     redLight.style.backgroundColor = "gray";
//     yellowLight.style.backgroundColor = "yellow";
//     greenLight.style.backgroundColor = "gray";
// });

// greenBtn.addEventListener("click", function() {
//     redLight.style.backgroundColor = "gray";
//     yellowLight.style.backgroundColor = "gray";
//     greenLight.style.backgroundColor = "green";
// });




