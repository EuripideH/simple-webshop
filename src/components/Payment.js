// src/components/Payment.js
import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import './Payment.css';

const Payment = ({ shippingInfo, cartItems, setShippingInfo }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    if (!shippingInfo) {
        return (
            <div className="payment">
                <Typography variant="h4" gutterBottom>
                    Shipping Information
                </Typography>
                <Typography variant="body1">
                    No shipping information provided.
                </Typography>
                <Typography variant="h4" gutterBottom>
                    Order Summary
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Total Price: ${totalPrice.toFixed(2)}
                </Typography>
                <Typography variant="h4" gutterBottom>
                    Choose Payment Method
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Paper className="payment-method">
                            <Typography variant="h6">Bank Card</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper className="payment-method">
                            <Typography variant="h6">PayPal</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper className="payment-method">
                            <Typography variant="h6">Bank Transfer</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }

    return (
        <div className="payment">
            <Typography variant="h4" gutterBottom>
                Shipping Information
            </Typography>
            <Typography variant="body1">
                Name: {shippingInfo.name}
            </Typography>
            <Typography variant="body1">
                Address: {shippingInfo.address}
            </Typography>
            <Typography variant="body1">
                Mail: {shippingInfo.mail}
            </Typography>
            <Typography variant="h4" gutterBottom>
                Order Summary
            </Typography>
            {cartItems.map(item => (
                <div key={item.id} className="order-item">
                    <Typography variant="h6">
                        {item.name} x {item.quantity}
                    </Typography>
                    <Typography variant="body1">
                        ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                </div>
            ))}
            <Typography variant="h5" gutterBottom>
                Total Price: ${totalPrice.toFixed(2)}
            </Typography>
            <Typography variant="h4" gutterBottom>
                Choose Payment Method
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Paper className="payment-method">
                        <Typography variant="h6">Bank Card</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className="payment-method">
                        <Typography variant="h6">PayPal</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className="payment-method">
                        <Typography variant="h6">Bank Transfer</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Payment;


