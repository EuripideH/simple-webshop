// src/components/ShippingForm.js
import React, { useState } from 'react';

const ShippingForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, address });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
            <button type="submit">Proceed to Payment</button>
        </form>
    );
};

export default ShippingForm;
