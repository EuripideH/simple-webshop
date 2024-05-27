// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Order from './components/Order';
import Payment from './components/Payment';
import ShippingInfoForm from './components/ShippingInfoForm';
import './App.css';

const App = () => {
    const [products] = useState([
        { id: 1, name: 'Product 1', description: 'Description for Product 1', price: 29.99 },
        { id: 2, name: 'Product 2', description: 'Description for Product 2', price: 39.99 },
        { id: 3, name: 'Product 3', description: 'Description for Product 3', price: 49.99 },
        { id: 4, name: 'Product 4', description: 'Description for Product 1', price: 9.99 },
        { id: 5, name: 'Product 5', description: 'Description for Product 2', price: 99.99 },
        { id: 6, name: 'Product 6', description: 'Description for Product 3', price: 119.99 }
    ]);

    const [cartItems, setCartItems] = useState([]);
    const [shippingInfo, setShippingInfo] = useState(null);

    const handleShippingInfoSubmit = (data) => {
        setShippingInfo(data);
    };

    const addToCart = (product) => {
        const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += 1;
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (product) => {
        setCartItems(cartItems.filter(item => item.id !== product.id));
    };

    return (
        <Router>
            <div className="app">
                <Header cartItemCount={cartItems.reduce((total, item) => total + item.quantity, 0)} />
                <main>
                    <Routes>
                        <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
                        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
                        <Route path="/order" element={<Order cartItems={cartItems} setShippingInfo={setShippingInfo} />} />
                        <Route path="/payment" element={<Payment shippingInfo={shippingInfo} cartItems={cartItems} />} />
                        <Route path="/shipping-info" element={<ShippingInfoForm onSubmit={handleShippingInfoSubmit} />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
