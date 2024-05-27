// src/components/ProductDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products, addToCart }) => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <p>Product not found.</p>;
    }

    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value));
    };

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
    };

    return (
        <div className="product-detail">
            <img src={`img/${product.id}.jpg`} alt={product.name} style={{ width: '300px', height: '300px' }} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductDetail;

