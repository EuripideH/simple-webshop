// src/components/AddProductForm.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const AddProductForm = ({ onAddProduct }) => {
    const [newProduct, setNewProduct] = useState({
        id: '',
        name: '',
        description: '',
        price: '',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProduct({ ...newProduct, id: parseInt(newProduct.id), price: parseFloat(newProduct.price) });
        setNewProduct({ id: '', name: '', description: '', price: '', image: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="ID"
                name="id"
                value={newProduct.id}
                onChange={handleChange}
                margin="normal"
                fullWidth
                required
            />
            <TextField
                label="Name"
                name="name"
                value={newProduct.name}
                onChange={handleChange}
                margin="normal"
                fullWidth
                required
            />
            <TextField
                label="Description"
                name="description"
                value={newProduct.description}
                onChange={handleChange}
                margin="normal"
                fullWidth
                required
            />
            <TextField
                label="Price"
                name="price"
                value={newProduct.price}
                onChange={handleChange}
                margin="normal"
                fullWidth
                required
            />
            <TextField
                label="Image Path"
                name="image"
                value={newProduct.image}
                onChange={handleChange}
                margin="normal"
                fullWidth
                required
            />
            <Button type="submit" variant="contained" color="primary">Add Product</Button>
        </form>
    );
};

export default AddProductForm;
