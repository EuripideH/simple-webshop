// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartItemCount }) => {
    return (
        <header>
            <h1>Simple Webshop</h1>
            <nav>
                <Link to="/">Products</Link>
                <Link to="/cart">Cart ({cartItemCount})</Link>
            </nav>
        </header>
    );
};

export default Header;

