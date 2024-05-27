// src/components/Order.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Order = ({ cartItems, setShippingInfo }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [mail, setMail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setShippingInfo({ name, address, mail });
        navigate('/payment');
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="order">
            <h2>Order Summary</h2>
            {cartItems.map(item => (
                <div key={item.id} className="order-item">
                    <h3>{item.name} x {item.quantity}</h3>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
            ))}
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            <h2>Shipping Information</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Enter your name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <label htmlFor="address">Address:</label>
                <input 
                    type="text" 
                    id="address" 
                    name="address" 
                    placeholder="Enter your address" 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                />
                <label htmlFor="email">Email:</label>
                <input 
                    type="text" 
                    id="email" 
                    name="email" 
                    placeholder="Enter your mail" 
                    value={mail} 
                    onChange={(e) => setMail(e.target.value)} 
                />
                <button type="submit">Proceed to Payment</button>
            </form>
        </div>
    );
};

export default Order;
