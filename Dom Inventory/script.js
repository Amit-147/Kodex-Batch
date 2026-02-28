const productForm = document.getElementById('product-form');
const productContainer = document.querySelector('.all-data');
const submitBtn = document.getElementById('submit-btn');

let isEditMode = false;
let currentEditItem = null;

productForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('product-name').value;
    const category = document.getElementById('product-category').value;
    const price = document.getElementById('selling-price').value;
    const quantity = document.getElementById('quantity').value;
    const expiryDate = document.getElementById('expiry-date').value;

    if (isEditMode && currentEditItem) {
        // Update existing item
        updateItem(currentEditItem, name, category, price, quantity, expiryDate);
        resetForm();
    } else {
        // Add new item
        addProduct(name, category, price, quantity, expiryDate);
        productForm.reset();
    }
});

function addProduct(name, category, price, quantity, expiryDate) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    itemDiv.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Category:</strong> <span>${category}</span></p>
        <p><strong>Price:</strong> $<span>${price}</span></p>
        <p><strong>Quantity:</strong> <span>${quantity}</span></p>
        <p><strong>Expiry:</strong> <span>${expiryDate}</span></p>
        <div>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    const deleteBtn = itemDiv.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function () {
        itemDiv.remove();
        if (currentEditItem === itemDiv) resetForm();
    });

    const editBtn = itemDiv.querySelector('.edit-btn');
    editBtn.addEventListener('click', function () {
        populateForm(itemDiv, name, category, price, quantity, expiryDate);
    });

    productContainer.appendChild(itemDiv);
}

function populateForm(itemDiv, name, category, price, quantity, expiryDate) {
    document.getElementById('product-name').value = name;
    document.getElementById('product-category').value = category;
    document.getElementById('selling-price').value = price;
    document.getElementById('quantity').value = quantity;
    document.getElementById('expiry-date').value = expiryDate;

    isEditMode = true;
    currentEditItem = itemDiv;
    submitBtn.textContent = 'Update Product';
    submitBtn.style.backgroundColor = 'royalBlue';
}

function updateItem(itemDiv, name, category, price, quantity, expiryDate) {
    itemDiv.querySelector('h3').textContent = name;
    const spans = itemDiv.querySelectorAll('span');
    spans[0].textContent = category;
    spans[1].textContent = price;
    spans[2].textContent = quantity;
    spans[3].textContent = expiryDate;

    // Update the edit button listener with new values
    const editBtn = itemDiv.querySelector('.edit-btn');
    const newEditBtn = editBtn.cloneNode(true);
    editBtn.parentNode.replaceChild(newEditBtn, editBtn);
    newEditBtn.addEventListener('click', function () {
        populateForm(itemDiv, name, category, price, quantity, expiryDate);
    });
}

function resetForm() {
    productForm.reset();
    isEditMode = false;
    currentEditItem = null;
    submitBtn.textContent = 'Add Product';
    submitBtn.style.backgroundColor = 'black';
}
