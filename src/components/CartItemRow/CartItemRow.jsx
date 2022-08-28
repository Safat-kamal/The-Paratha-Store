import React from 'react';
import './CartItemRow.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { IconButton } from '@mui/material';
import { useCartContextValue } from '../../context/CartProvider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CartItemRow = ({ id, dish, image, quantity, price, addons }) => {
    const [,dispatch] = useCartContextValue();


    const qunatityIncrement = ()=>{
        dispatch({
            type:'ITEM_INCREMENT',
            item:{
                id:id
            }
        })
    }
    const qunatityDecrement = ()=>{
        dispatch({
            type:'ITEM_DECREMENT',
            item:{
                id:id
            }
        })
    }
    
    const remove_from_cart = () => {
        dispatch({
            type:"REMOVE_FROM_CART",
            item:{
                id:id,
                dish:dish,
                quantity:quantity,
            }
        })
    }

    const handleAddOnChange = (e)=>{
        let TargetName = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.innerHTML;
        let TargetAddon = e.target.value
        if(e.target.checked){
            fetch(`http://localhost:8000/Addons?q=${TargetAddon}`)
            .then((response)=>response.json())
            .then((data)=>{
                dispatch({
                    type:'ADDON_ADD',
                    item:{
                        dish:TargetName,
                        dishAddon:TargetAddon,
                        dishAddonPrice:data[0].price
                    }
                });
            }).catch((e)=>console.log(e.message));
        }
        else{
            fetch(`http://localhost:8000/Addons?q=${TargetAddon}`)
            .then((response)=>response.json())
            .then((data)=>{
                dispatch({
                    type:'ADDON_REMOVE',
                    item:{
                        dish:TargetName,
                        dishAddon:TargetAddon,
                        dishAddonPrice:data[0].price
                    }
                });
            }).catch((e)=>console.log(e.message));
        }
    }
    return (
        <div className='item__row'>
            <img src={image} className="item_image" alt={dish} />
            <div className='item_description'>
                <div className="item_description_upperdescription">
                    <p className='item_name'>{dish}</p>
                    <p className='item_price'>₹{price}</p>
                </div>
                <div className="item_quantity_container">
                    <IconButton onClick={qunatityDecrement}><IndeterminateCheckBoxIcon /></IconButton>
                    <span className='item_quantity'>{quantity}</span>
                    <IconButton onClick={qunatityIncrement}><AddBoxIcon /></IconButton>
                </div>
                <div className="item_description_lastdescription">
                <FormGroup className='addon_container'>
                    {addons?.map((addon,index)=>{
                        return (<FormControlLabel key={index} control={<Checkbox color='success' onChange={handleAddOnChange} value={addon}/>} label={addon}/>)
                        })
                    }
                </FormGroup>
                    <button onClick={remove_from_cart} className="removeItem"><DeleteForeverIcon /> Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CartItemRow;