import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">🐾 Animal Care</div>
      <nav>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#form">Animal Form</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
