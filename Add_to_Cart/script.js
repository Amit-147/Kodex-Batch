// Dummy Data
let productsData = [
    {
        "productName": "Apple iPhone 15 Pro",
        "category": "Smartphones",
        "price": 999,
        "imageUrl": "https://picsum.photos/seed/iphone15pro/600/600"
    },
    {
        "productName": "Samsung Galaxy S23 Ultra",
        "category": "Smartphones",
        "price": 1199,
        "imageUrl": "https://picsum.photos/seed/galaxys23ultra/600/600"
    },
    {
        "productName": "Sony WH-1000XM5 Headphones",
        "category": "Audio",
        "price": 399,
        "imageUrl": "https://picsum.photos/seed/sonyheadphones/600/600"
    },
    {
        "productName": "Apple MacBook Air M2",
        "category": "Laptops",
        "price": 1099,
        "imageUrl": "https://picsum.photos/seed/macbookairm2/600/600"
    },
    {
        "productName": "Nike Air Force 1",
        "category": "Footwear",
        "price": 110,
        "imageUrl": "https://picsum.photos/seed/nikeairforce1/600/600"
    },
    {
        "productName": "Adidas Ultraboost 22",
        "category": "Footwear",
        "price": 180,
        "imageUrl": "https://picsum.photos/seed/adidasultraboost22/600/600"
    },
    {
        "productName": "Canon EOS R6 Camera",
        "category": "Cameras",
        "price": 2499,
        "imageUrl": "https://picsum.photos/seed/canoneosr6/600/600"
    },
    {
        "productName": "PlayStation 5",
        "category": "Gaming Consoles",
        "price": 499,
        "imageUrl": "https://picsum.photos/seed/playstation5/600/600"
    }
]

// Render dummy data into ui

let section = document.querySelector('section');
let allProducts = ''

productsData.forEach(function (elem, index) {
    allProducts += `<div class="product-card">
                <div class="img">
                    <img src="${elem.imageUrl}" alt="">
                </div>
                <div class="content">
                    <h3>Name: <span>${elem.productName}</span></h3>
                    <h3>Category: ${elem.category}</h3>
                    <h3>Price: <span>$ ${elem.price}</span></h3>
                    </div>
                    <div class="btns">
                    <button>Remove</button>
                    <button id="${index}">Add to Cart</button>
                    </div>
            </div>`
})

section.innerHTML = allProducts


// Render ui in CartScreen 

let cartScreen = document.querySelector('.cart-screen');

let cartsData = []

function renderCartUi() {
    let cartUi = ""
    cartsData.forEach(function (elem, index) {
        cartUi += `<div class="product-card">
                    <div class="img">
                        <img src="${elem.imageUrl}" alt="">
                    </div>
                    <div class="content">
                        <h3>Name: <span>${elem.productName}</span></h3>
                        <h3>Category: ${elem.category}</h3>
                        <h3>Price: <span>$ ${elem.price}</span></h3>
                    </div>
                    <div class="btns">
                    <button onClick="deleteFromCart(${index})">Remove</button>
                    </div>
                </div>`
    })

    cartScreen.innerHTML = cartUi;
}


// Add to functionality (Jisme hum cartsData  
// Array me selected cards ko push kar rhe h)
let homeBtn = document.querySelector('#home');
let cartBtn = document.querySelector('#cart');

section.addEventListener('click', function (dets) {
    if (!dets.target.id) {
        return;
    }

    let clickedCard = productsData.find(function (elem, index) {
        return index == dets.target.id
    })

    cartsData.push(clickedCard);
    renderCartUi();
})


// Toggle Cart screen and Home screen

cartBtn.addEventListener('click', function () {
    cartScreen.style.display = 'flex';
})

homeBtn.addEventListener('click', function () {
    cartScreen.style.display = 'none';
})

// delete function 

function deleteFromCart(id) {
    let result = cartsData.filter(function (elem, index) {
        return index !== id
    })

    cartsData = result
    renderCartUi();
}