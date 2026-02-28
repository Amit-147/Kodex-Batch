// ## 2. Random Color Card Generator

// Create a card on button click. Generate a random RGB background color
// using `Math.floor()` and `Math.random()`. Set a random width and height.
// Assign a unique `data-id` using `setAttribute()`.


var btn = document.querySelector("button")

btn.addEventListener("click", function () {

    var div = document.createElement("div")

    // Div ko normal document flow se hata kar free movement dene ke liye
    div.style.position = "absolute"

    // Minimum aur maximum size define kar rahe hain (px mein)
    var min = 100
    var max = 300

    // Random width generate (100–300 ke beech)
    var randomWidth = Math.floor(Math.random() * (max - min)) + min

    // Random height generate (100–300 ke beech)
    var randomHeight = Math.floor(Math.random() * (max - min)) + min

    // Random X position (screen width ke andar safe area)
    // window.innerWidth → visible screen width
    // - randomWidth → taaki box bahar na cut ho
    var randomX = Math.floor(Math.random() * (window.innerWidth - randomWidth))

    // Random Y position (screen height ke andar safe area)
    var randomY = Math.floor(Math.random() * (window.innerHeight - randomHeight))

    // Div ki horizontal position set kar rahe hain
    div.style.left = randomX + "px"
    // Div ki vertical position set kar rahe hain
    div.style.top = randomY + "px"

    div.style.width = randomWidth + "px"
    div.style.height = randomHeight + "px"
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    document.body.appendChild(div)

})