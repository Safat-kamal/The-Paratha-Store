import React from 'react';
import {NavLink} from 'react-router-dom';
import OrderContainer from '../components/OrderContainer/OrderContainer';

const CheckoutPage = () => {
  return (
    <>
        {/* Header */}
        <div className='header'>
            <NavLink to="/">
                <div className="header__left">
                    <p>PARATHA-STORE</p>
                </div>
            </NavLink>
            <div className="header__center">
                <p>CHECKOUT</p>
            </div>
            <div className="header__right">
                </div>
        </div>
        {/* order details */}
        <OrderContainer/>
    </>
  );
}

export default CheckoutPage