import React from 'react';
import logo from '../assets/logo.png';

function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="logo" className="logo_img" />
      </header>
      <div className="header_border"></div>
    </>
  );
}

export default Header;
