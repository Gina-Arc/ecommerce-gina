// src/components/NavBar.js
import React from 'react';
import CartWidget from './CartWidget';
const NavBar = () => {
    return (
        <nav>
            <div className="logo">Mi Tienda</div>
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#productos">Productos</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
};
export default NavBar;