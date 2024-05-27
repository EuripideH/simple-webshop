// src/components/ProductList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Button, Typography, TextField, Grid } from '@mui/material';

const ProductList = ({ products, addToCart }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('name-asc');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSortChange = (option) => {
        setSortOption(option);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProducts = filteredProducts.sort((a, b) => {
        if (sortOption === 'name-asc') {
            return a.name.localeCompare(b.name);
        } else if (sortOption === 'name-desc') {
            return b.name.localeCompare(a.name);
        } else if (sortOption === 'price-asc') {
            return a.price - b.price;
        } else if (sortOption === 'price-desc') {
            return b.price - a.price;
        }
        return 0;
    });

    return (
        <div className="product-list">
            <TextField
                label="Search Products"
                variant="outlined"
                fullWidth
                margin="normal"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <div style={{ marginBottom: '20px' }}>
                <Button variant="contained" onClick={() => handleSortChange('name-asc')}>Sort by Name (A-Z)</Button>
                <Button variant="contained" onClick={() => handleSortChange('name-desc')}>Sort by Name (Z-A)</Button>
                <Button variant="contained" onClick={() => handleSortChange('price-asc')}>Sort by Price (Low to High)</Button>
                <Button variant="contained" onClick={() => handleSortChange('price-desc')}>Sort by Price (High to Low)</Button>
            </div>
            <Grid container spacing={3}>
                {sortedProducts.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4}>
                        <Card style={{ margin: '20px', maxWidth: '300px' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={`img/${product.id}.jpg`}
                                alt={product.name}
                            />
                            <CardContent>
                                <Typography variant="h6">{product.name}</Typography>
                                <Typography variant="body2">{product.description}</Typography>
                                <Typography variant="h6">${product.price.toFixed(2)}</Typography>
                                <Button variant="contained" color="primary" component={Link} to={`/product/${product.id}`}>
                                    View Details
                                </Button>
                                <Button variant="contained" color="secondary" onClick={() => addToCart(product)}>
                                    Add to Cart
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ProductList;
