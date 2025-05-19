import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeItem, clearCart, totalPrice } = useCart();

  if (cartItems.length === 0)
    return (
      <div className="cart">
        <h2>Carrito vacío</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    );

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} removeItem={removeItem} />
      ))}
      <h3>Total: ${totalPrice}</h3>
      <button onClick={clearCart}>Vaciar Carrito</button>
      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>
    </div>
  );
};

export default Cart;