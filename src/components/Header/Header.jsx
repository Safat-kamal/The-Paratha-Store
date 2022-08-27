import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, NavLink } from "react-router-dom";
import './Header.css';
import { useCartContextValue } from '../../context/CartProvider';

const Header = () => {
  const [{cart}] = useCartContextValue();
  return (
    <div className='header'>
        <NavLink to="/">
          <div className="header__left">
              <p>PARATHA-STORE</p>
          </div>
        </NavLink>
      <div className="header__right">
        <div className="header__rightChild">
            <span style={{cursor:"pointer"}}>Sign In/Sign Up </span>
        </div>
        <div className="header__rightChild">
            <Link to="/cart">
              <span><ShoppingCartIcon/> </span>
              <span> {cart?.length}</span>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
