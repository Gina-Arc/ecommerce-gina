import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => (
  <header className="header">
    <div style={{ display: "flex", alignItems: "center" }}>
      <h1 style={{ margin: 0, fontSize: "2rem" }}>📱 Tienda Celulares</h1>
    </div>
    <nav style={{ display: "flex", alignItems: "center", gap: "15px" }}>
      <Link to="/">Inicio</Link>
      <Link to="/cart">
        <CartWidget />
      </Link>
      <span style={{ margin: "0 10px", color: "#ccc" }}>|</span>
      <Link to="/login" style={{ fontWeight: "bold" }}>Iniciar sesión</Link>
      <Link to="/register" style={{ fontWeight: "bold" }}>Crear cuenta</Link>
    </nav>
  </header>
);

export default NavBar;