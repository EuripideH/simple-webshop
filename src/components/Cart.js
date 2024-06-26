// src/components/Cart.js
import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart }) => {
    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <div className="product-image">
                                <img src={`img/${item.id}.jpg`} alt={item.name} style={{ width: '150px', height: '150px' }} />
                            </div>
                            <div className="product-details">
                                <h3>{item.name} {item.quantity > 1 && `(Amount: ${item.quantity})`}</h3>
                                <p>${(item.price * item.quantity).toFixed(2)}</p>
                                <button onClick={() => removeFromCart(item)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <Link to="/order">
                        <button>I want to order them!</button>
                    </Link>
                </>
            )}
        </div>
    );
};

export default Cart;


