import React from 'react';
import FoodCard from '../card/FoodCard';
import './Cards.css';
import Grid from '@mui/material/Grid';


const Cards = () => {
    return (
        <div className="container">
            <h2>List of Available Food in our Restaurant</h2>
            <div className="cards">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                        <FoodCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                        <FoodCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                        <FoodCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                        <FoodCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                        <FoodCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                        <FoodCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                        <FoodCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                        <FoodCard />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Cards