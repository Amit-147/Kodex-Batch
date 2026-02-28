const foodMenu = [
    {
        name: "Classic Cheeseburger",
        img: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
        price: "$5.99",
        left: 12
    },
    {
        name: "Crispy French Fries",
        img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlbmNoJTIwZnJpZXN8ZW58MHx8MHx8fDA%3D",
        price: "$2.49",
        left: 45
    },
    {
        name: "Pepperoni Pizza Slice",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D",
        price: "$3.50",
        left: 8
    },
    {
        name: "Spicy Fried Chicken",
        img: "https://media.istockphoto.com/id/835903320/photo/baked-chicken-wings-with-sesame-seeds-and-sweet-chili-sauce-on-white-wooden-board.webp?a=1&b=1&s=612x612&w=0&k=20&c=bNB4DzaPffg-88nLpiW-afRgsxhQuKX8ZkdWvaVGQPQ=",
        price: "$7.99",
        left: 15
    },
    {
        name: "Grilled Hot Dog",
        img: "https://images.unsplash.com/photo-1721648373511-fb220d7f043f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdCUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
        price: "$4.00",
        left: 20
    },
    {
        name: "Beef Tacos",
        img: "https://plus.unsplash.com/premium_photo-1661730314652-911662c0d86e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "$6.50",
        left: 10
    },
    {
        name: "Chocolate Milkshake",
        img: "https://images.unsplash.com/photo-1653122025865-5e75e63cf4ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNob2NsYXRlJTIwbWlsa3NoYWtlfGVufDB8fDB8fHww",
        price: "$4.99",
        left: 18
    },
    {
        name: "Glazed Donut",
        img: "https://plus.unsplash.com/premium_photo-1683121823310-121e5fe5a06d?q=80&w=822&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "$1.99",
        left: 25
    }
];
var main = document.querySelector("main")
var sum = ""

foodMenu.forEach(function (elem, idx) {
    sum += `<div class="card">
            <img src=${elem.img} alt="">
            <div class="overlay-text">
                  <h1>${elem.name}</h1>
                  <div class="price">
                    <h2 class="rate">${elem.price}</h2>
                    <h3 class="item-left">${elem.left} Left</h3>
                  </div>
            </div>
        </div>`
})
main.innerHTML = sum