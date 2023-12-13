// Navigation.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <header className="main-header">
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact="true">All Products</NavLink>
          </li>
          <li>
            <NavLink to="/favorites" exact="true">Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
