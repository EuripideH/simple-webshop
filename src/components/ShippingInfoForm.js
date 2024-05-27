// src/components/ShippingInfoForm.js

import React, { useState } from 'react';

const ShippingInfoForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData); // Pass the form data to the onSubmit function
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Enter your name" 
            />
            <label htmlFor="address">Address:</label>
            <input 
                type="text" 
                id="address" 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                placeholder="Enter your address" 
            />
             <label htmlFor="email">Email:</label>
            <input 
                type="text" 
                id="email" 
                name="email" 
                value={formData.mail} 
                onChange={handleChange} 
                placeholder="Enter your email" 
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ShippingInfoForm;
