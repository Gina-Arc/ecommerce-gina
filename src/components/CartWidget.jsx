import React from 'react';
import { useCart } from '../context/CartContext';

const CartWidget = () => {
  const { totalItems } = useCart();
  return (
    <span>
      🛒 ({totalItems})
    </span>
  );
};

export default CartWidget;