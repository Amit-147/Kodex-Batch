var btn = document.getElementById("btn");
var box = document.getElementById("box");

img = [
    "./chotabheem.png",
    "./chutki.png",
    "./doraemon.png",
    "./kaliya.png",
    "./kirmada.png",
    "./raju.png",
    "./shinchan.png",
    "./shizuka.png"
]

btn.addEventListener("click", function(){
    var random = Math.floor(Math.random() * img.length);
    var image = document.createElement("img");
    image.src = img[random];
    
    // Random position within the box
    var maxX = box.clientWidth - 150;
    var maxY = box.clientHeight - 150;
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);
    
    image.style.left = randomX + "px";
    image.style.top = randomY + "px";
    
    box.appendChild(image);
})