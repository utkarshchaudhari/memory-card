import React from 'react';
import logo from '../assets/logo.png';

function Header() {
  return (
    <div className="container">
      <header>
        <img src={logo} alt="logo" className="logo_img" />
      </header>
      <div className="header_border"></div>
    </div>
  );
}

export default Header;
