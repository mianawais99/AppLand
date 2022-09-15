import React from 'react';
import logo from '../images/logo.png';

function Navbar() {
  return (
    <nav className={}>
        <a href='#'>
            <img src={logo} alt='AppLand' />
        </a>
        <input type='checkbox' className='menu-btn' id='menu-btn' />
        <label className='menu-icon' for='menu-btn' />
    </nav>
  )
}

export default Navbar;