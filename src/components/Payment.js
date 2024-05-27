// src/components/Payment.js
import React from 'react';
import './Payment.css';

const Payment = ({ shippingInfo, cartItems }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    if (!shippingInfo) {
        return (
            <div className="payment">
                <h2>Shipping Information</h2>
                <p>No shipping information provided.</p>
                <h2>Order Summary</h2>
                <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                <h2>Choose Payment Method</h2>
                <div className="payment-methods">
                    <div className="payment-method">
                        <h3>Bank Card</h3>
                    </div>
                    <div className="payment-method">
                        <h3>PayPal</h3>
                    </div>
                    <div className="payment-method">
                        <h3>Bank Transfer</h3>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="payment">
            <h2>Shipping Information</h2>
            <p>Name: {shippingInfo.name}</p>
            <p>Address: {shippingInfo.address}</p>
            <p>Mail: {shippingInfo.mail}</p>
            <h2>Order Summary</h2>
            {cartItems.map(item => (
                <div key={item.id} className="order-item">
                    <h3>{item.name} x {item.quantity}</h3>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
            ))}
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            <h2>Choose Payment Method</h2>
            <div className="payment-methods">
                <div className="payment-method">
                    <h3>Bank Card</h3>
                </div>
                <div className="payment-method">
                    <h3>PayPal</h3>
                </div>
                <div className="payment-method">
                    <h3>Bank Transfer</h3>
                </div>
            </div>
        </div>
    );
};

export default Payment;

