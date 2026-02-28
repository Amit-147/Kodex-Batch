// ## 4. Dynamic Image Gallery

// Store image URLs in an array. On button click, pick a random image using
// `Math.floor()`. Create an `<img>` element dynamically and append it to a
// container. Use `getAttribute("src")` to print the image source in
// console.
var box = document.querySelector(".box")
var btn = document.querySelector("button")

var array = ["https://images.unsplash.com/photo-1771391550610-ffc28c474aa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D", "https://images.unsplash.com/photo-1771013015913-427262101338?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D", "https://plus.unsplash.com/premium_photo-1744868562901-aacac8d6cde9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D", "https://images.unsplash.com/photo-1770988966858-da0a4bde2f0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1770215962687-93b6b860add7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1671734044418-2cf4d99cd8ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1721353413070-bb55c58138fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"]

btn.addEventListener("click", function () {
    var randomIndex = Math.floor(Math.random() * array.length)
    var imgUrl = array[randomIndex]
    var img = document.createElement("img")
    img.style.height="100%"
    img.style.width="100%"
    // img.style.borderRadius="10px"
    img.style.objectFit="cover"

    img.src = imgUrl
    console.log(img.getAttribute("src"));
    box.replaceChildren(img)
})