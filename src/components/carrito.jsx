// src/components/carrito.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

const CarritoCompras = () => {
  const { cartItems, removeItem, clearCart } = useCart();

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} x{item.quantity}
              <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <>
          <button onClick={clearCart}>Vaciar Carrito</button>
          <button
            style={{ marginLeft: 10, background: "#25D366" }}
            onClick={() => {
              alert("¡Compra realizada con éxito!");
              clearCart();
            }}
          >
            Finalizar compra
          </button>
        </>
      )}
    </div>
  );
};

export default CarritoCompras;
