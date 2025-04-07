
import React from 'react';
import CarritoCompras from './carrito';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav>
              <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/category/cat1">Categoría 1</Link></li>
                <li><Link to="/category/cat2">Categoría 2</Link></li>
                <li><Link to="/carrito">Carrito</Link></li>
              </ul>
            </nav>
    );
};
export default NavBar;