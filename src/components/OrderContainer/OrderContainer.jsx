import React, { useState, useEffect } from 'react';
import { useCartContextValue } from '../../context/CartProvider';
import './OrderContainer.css';
import Grid from '@mui/material/Grid';
import { getcartTotalPrice } from '../../context/reducer';
import OrderItemRow from '../OrderItemRow/OrderItemRow';

const OrderContainer = () => {
    const [{ cart }] = useCartContextValue();
    const [distances,setDistances] = useState([]);
    const [showDetails,setShowDetails] = useState(false);
    const [deliveryTotal,setDeliveryTotal]  = useState(0);

    useEffect(()=>{
        fetch(`http://localhost:8000/DeliveryRange`).then((response)=>response.json()).then((data)=>setDistances(data)).catch((e)=>{
            console.log(e.message)
        })
    }, []);

    const distancehandler = (e)=>{
        if(e.target.value !== ""){
            if(e.target.value !== 'Upto 5 km'){
                fetch(`http://localhost:8000/DeliveryRange?q=${e.target.value}`)
                .then((response)=>response.json())
                .then((data)=>setDeliveryTotal(data[0].price))
                .catch((e)=>{
                    console.log(e.message)
                });
                setShowDetails(true);
            }
            else{
                setDeliveryTotal(0)
                setShowDetails(true);
            }
        }
    }
    
    return (
        <div id="OrderPage">
            <div className="OrderContainer">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3 }}>
                    {!showDetails && <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <h3 id="distance_title">Choose Approximate Distance for Proceed to checkout:</h3>
                        <select onChange={distancehandler} id="distance_opttion">
                            <option value="">Please Choose Distance</option>
                            {distances?.map((distance)=>{
                                return(<option key={distance.id} value={distance.range}>{distance.range}</option>)
                            })}
                        </select>
                    </Grid>}
                    {showDetails && <>
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
                                    <p>{deliveryTotal > 0?`₹${deliveryTotal}`:"NA"}</p>
                                </div>
                                <div id="order_right_Total">
                                    <p>Grand Total: </p>
                                    <p>₹{getcartTotalPrice(cart) + deliveryTotal}</p>
                                </div>
                                <button type="button" id="buyNow" disabled={(getcartTotalPrice(cart)> 0)? false: true}>Buy Now</button>
                            </div>
                        </Grid>
                    </>}
                </Grid>
            </div>
        </div>
    )
}


export default OrderContainer;