import React from 'react';
import './App.css';
import NavBar from './components/navbar'; 
import ItemListContainer from './components/list';
import CarritoCompras from './components/carrito'; 
import Button from './components/button'; 


function App() {
    return (
        <div>
            <NavBar />
            <ItemListContainer welcomeMessage="¡Bienvenido a nuestra tienda!" />
            <CarritoCompras /> {}
            <Button /> {}
        </div>
    );
}
export default App;
