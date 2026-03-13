import { useState } from 'react'
import './ProductCart.css'

const products = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
        title: 'Premium Watch',
        name: 'Timex Classic Pro',
        price: '$129.99',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
        title: 'Running Shoes',
        name: 'Nike Air Zoom X',
        price: '$89.99',
    },
    {
        id: 3,
        image: 'https://avstore.in/cdn/shop/files/1.AVStore-Sonos-Ace-Front-Angled-View-Hero-Black.jpg?v=1725620870',
        title: 'Headphones',
        name: 'Sony WH-1000XM5',
        price: '$249.99',
    },
]

function ProductCart() {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (id) => {
        setCartItems((prev) => [...prev, id])
    }

    return (
        <div className="page">
            <h1>Our Products</h1>

            <div className="products-grid">
                {products.map((product) => {
                    const isAdded = cartItems.includes(product.id)

                    return (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.title} />
                            <div className="card-body">
                                <h3>{product.title}</h3>
                                <p className="product-name">{product.name}</p>
                                <p className="product-price">{product.price}</p>
                                <button
                                    className={`add-btn ${isAdded ? 'added' : ''}`}
                                    onClick={() => addToCart(product.id)}
                                    disabled={isAdded}
                                >
                                    {isAdded ? '✓ Added' : 'Add to Cart'}
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductCart
