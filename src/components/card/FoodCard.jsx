import React, { useState } from 'react';
import './FoodCard.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useCartContextValue } from '../../context/CartProvider';


const FoodCard = ({ id, image, dish, price, addons }) => {
    const [,dispath] = useCartContextValue();
    const [itemAdded,setItemAdded] = useState(false);
    
    const addToCart = (e)=>{
        setItemAdded(true);
        dispath({
            type:'ADD_TO_CART',
            item:{
              id:id,
              image:image,
              dish:dish,
              quantity:1,
              price:price,
              addons:addons,
              selectedAddons:[],
              AddonTotalPrice:0
            }  
          });
    }

    return (
        <Card sx={{ maxWidth: 345 }} className="foodcard">
            <CardActionArea>
                <CardMedia
                    component="img"
                    className="food-card-image"
                    image={image}
                    alt={dish}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className="food_title">
                        {dish}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                        ₹{price} - 1Pc.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button style={{ flex: 1, }} variant="outlined" startIcon={<AddIcon />} onClick={addToCart} disabled={itemAdded}>
                    <span id={id} data-id="addCartBUtton">{itemAdded ? 'ADDED':'Add To Cart'}</span>
                </Button>
        </CardActions>
        </Card >
    )
}

export default FoodCard