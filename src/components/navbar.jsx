// src/components/navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => (
  <header className="header">
    <h1>Tienda Celulares</h1>
    <nav>
      <Link to="/">Inicio</Link> |{" "}
      <Link to="/category/samsung">Samsung</Link> |{" "}
      <Link to="/category/apple">Apple</Link> |{" "}
      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  </header>
);

export default NavBar;
