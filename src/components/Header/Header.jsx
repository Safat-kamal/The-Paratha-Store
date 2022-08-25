import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
        <div className="header__left">
            <p>PARATHA-STORE</p>
        </div>
      <div className="header__right">
        <div className="header__rightChild">
            <span>Sign In/Sign Up </span>
        </div>
        <div className="header__rightChild">
            <span><ShoppingCartIcon/> </span>
            <span> 0</span>
        </div>
      </div>
    </div>
  )
}

export default Header
