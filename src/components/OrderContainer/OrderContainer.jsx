import React from 'react';
import { useCartContextValue } from '../../context/CartProvider';
import CartItemRow from '../CartItemRow/CartItemRow';
import './OrderContainer.css';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { getcartTotalPrice } from '../../context/reducer';

const OrderContainer = () => {
    const [{ cart }] = useCartContextValue();
    return (
        <div id="OrderPage">
            <div className="OrderContainer">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3 }}>
                    <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                        <div className="OrderContainer__left">
                            <h3 id="Order_title">Order Details</h3>
                            {cart.length ? cart.map((item) => {
                                return (<CartItemRow key={item.id} id={item.id} dish={item.dish} image={item.image} quantity={item.quantity} price={item.price} addons={item.addons}/>);
                            }) : <Link to="/">
                                    <button type="button" id="continue_explore">Explore Food</button>
                                </Link>
                            }
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4} >
                        <div className="cartContainer__right">
                            <h3>SubTotal:  <span>₹{getcartTotalPrice(cart)}</span></h3>
                            <Link to="/checkout">
                                <button type="button" id="proceed_checkout" disabled={(getcartTotalPrice(cart)> 0)? false: true}>Buy Now</button>
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default OrderContainer
