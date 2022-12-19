import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div id='main'>
        <Navbar />
        <div className = 'name'>
        <h1><span>Launch Your App </span> with Confidence and Creativity</h1>
        <p className='details'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit tempora aliquid officia dolor voluptatem nesciunt corporis libero odit aspernatur alias placeat harum voluptates, ut distinctio qui quasi magnam tempore architecto!</p>
        <a href="#" className='cv-btn'>Download</a>
      </div>
    </div>
  )
}

export default Header;