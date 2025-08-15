import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <h1>Lynx</h1>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#categories">Categories</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
