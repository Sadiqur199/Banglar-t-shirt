import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
const Header = () => {
  return (
    <nav className='nav-link-design'>
      <Link to="/">Home</Link>
      <Link to="/review">Order Review</Link>
      <Link to="/about">About</Link>
      <Link to="/grandpa">Grandpa</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Header;