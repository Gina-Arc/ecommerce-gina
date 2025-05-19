import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { useCart } from '../context/CartContext';

const ItemDetail = ({ item }) => {
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (quantity) => {
    addItem(item, quantity);
    setAdded(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      <img src={item.image} alt={item.name} style={{ width: 200 }} />
      <h1>{item.name}</h1>
      <p>Precio: ${item.price}</p>
      <p>Stock: {item.stock}</p>
      {!added ? (
        <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
      ) : (
        <p>Producto agregado al carrito</p>
      )}
    </div>
  );
};

export default ItemDetail;