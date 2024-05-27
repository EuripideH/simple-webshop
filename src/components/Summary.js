// src/components/Summary.js
import React from 'react';

const Summary = ({ cartItems }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="summary">
            <h2>Order Summary</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price.toFixed(2)} x {item.quantity}
                    </li>
                ))}
            </ul>
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
    );
};

export default Summary;
