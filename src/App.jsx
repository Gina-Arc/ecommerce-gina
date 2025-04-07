import React from 'react';
import './App.css';
import NavBar from './components/navbar'; 
import ItemListContainer from './components/list';
import CarritoCompras from './components/carrito'; 
import Button from './components/button'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
function App() { 
<Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route path="/category/:categoryId" component={ItemListContainer} />
        <Route path="/product/:productId" component={ItemDetailContainer} />
        <Route path="/carrito" component={Carrito} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>

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
