import React from 'react';
import './FoodCard.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Button, CardActionArea, CardActions } from '@mui/material';


const FoodCard = () => {
    return (
        <Card sx={{ maxWidth: 345 }} className="foodcard">
            <CardActionArea>
                <CardMedia
                    component="img"
                    className="food-card-image"
                    image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/adoq1eld4dhb1lis3cfq"
                    alt="paratha"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Aloo Paratha
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                        ₹50 - 1Pc.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button style={{ flex: 1, }} variant="outlined" startIcon={<AddIcon />}>
                    <span id="addCartBUtton">Add To Cart</span>
                </Button>

            </CardActions>
        </Card>
    )
}

export default FoodCard