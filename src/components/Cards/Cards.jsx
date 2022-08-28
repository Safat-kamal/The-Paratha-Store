import React,{useEffect, useState} from 'react';
import FoodCard from '../card/FoodCard';
import './Cards.css';
import Grid from '@mui/material/Grid';


const Cards = () => {
    const [foodList,setFoodList] =  useState([]);

    useEffect(()=>{
        fetch("http://localhost:8000/Dishes").then((response)=>response.json()).then((data)=>{
            setFoodList(data)
        }).catch((error)=>console.danger(error.message))
    }, []);

    return (
        <div className="container">
            <h2>List of Available Food in our Restaurant</h2>
            <div className="cards">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {foodList?.map((food)=>{
                        return (
                            <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={food.id}>
                                <FoodCard id={food.id} dish={food.dish} image={food.image} price={food.price} addons={food.addons}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        </div>
    )
}

export default Cards