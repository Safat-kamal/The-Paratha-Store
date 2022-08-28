import React from 'react';
import { useCartContextValue } from '../../context/CartProvider';
import './OrderContainer.css';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { getcartTotalPrice } from '../../context/reducer';
import OrderItemRow from '../OrderItemRow/OrderItemRow';

const OrderContainer = () => {
    const [{ cart }] = useCartContextValue();
    return (
        <div id="OrderPage">
            <div className="OrderContainer">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3 }}>
                    <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                        <div className="OrderContainer__left">
                            <h3 id="Order_title">Order Details</h3>
                            {cart.map((item) => {
                                return (<OrderItemRow key={item.id} id={item.id} dish={item.dish} image={item.image} quantity={item.quantity} price={item.price} addonsTotal={item.AddonTotalPrice}/>);
                            })}
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4} >
                        <div className="orderContainer__right">
                            <h3>Order Summary</h3>
                            <div id="order_right_itemTotal">
                                <p>Item Total: </p>
                                <p>₹{getcartTotalPrice(cart)}</p>
                            </div>
                            <div id="order_right_DeliveryTotal">
                                <p>Delivery Charge: </p>
                                <p>₹20</p>
                            </div>
                            <div id="order_right_Total">
                                <p>Grand Total: </p>
                                <p>₹{getcartTotalPrice(cart) + 20}</p>
                            </div>
                            <button type="button" id="buyNow" disabled={(getcartTotalPrice(cart)> 0)? false: true}>Buy Now</button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default OrderContainer
