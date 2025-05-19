import React from 'react';

const CartItem = ({ item, removeItem }) => (
  <div>
    {item.name} x{item.quantity} - ${item.price * item.quantity}
    <button onClick={() => removeItem(item.id)}>Eliminar</button>
  </div>
);

export default CartItem;