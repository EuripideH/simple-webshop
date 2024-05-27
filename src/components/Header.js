// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = ({ cartItemCount }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    My Store
                </Typography>
                <Button color="inherit" component={Link} to="/">
                    Home
                </Button>
                <Button color="inherit" component={Link} to="/add-product">
                    Add Product
                </Button>
                <Button color="inherit" component={Link} to="/cart">
                    <Badge badgeContent={cartItemCount} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
