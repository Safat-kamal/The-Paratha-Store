import React from 'react';
import './OrderItemRow.css';
import { useCartContextValue } from '../../context/CartProvider';


const OrderItemRow = ({ id, dish, image, quantity, price, addonsTotal }) => {
    const [, dispatch] = useCartContextValue();

    return (
        <>
            <div className='item__row'>
                <span className="order_quantity">{quantity} x </span><img src={image} className="item_image" alt={dish} />
                <div className='item_description'>
                    <div className="item_description_price">
                        <p className='item_name'>{dish}</p>
                        <p className='item_price'>Price: ₹{price}</p>
                    </div>
                    <p className="item_addonTotal_price">
                        {addonsTotal > 0 && `Addons: ₹${addonsTotal}`}
                    </p>
                </div>
            </div>
            <p className="item_Total">
                Total: ₹{addonsTotal + (quantity*price)}
            </p>
        </>
    )
}

export default OrderItemRow