jsx
import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import ItemListContainer from './components/list';
import CarritoCompras from './components/carrito';
import ItemDetailContainer from './components/ItemDetailContainer'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={ItemListContainer} />
                <Route path="/category/:categoryId" component={ItemListContainer} />
                <Route path="/product/:productId" component={ItemDetailContainer} />
                <Route path="/carrito" component={CarritoCompras} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    );
}
export default App;