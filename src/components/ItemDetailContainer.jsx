// ItemDetailContainer.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const productos = [
  { id: 1, name: 'Producto 1', category: 'cat1' },
  { id: 2, name: 'Producto 2', category: 'cat1' },
  { id: 3, name: 'Producto 3', category: 'cat2' },
];

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const { addItem } = useCart();
  const producto = productos.find(p => p.id === Number(productId));

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Detalle del {producto.name}</h1>
      <p>Acá iría la información detallada del producto.</p>
      <button onClick={() => addItem(producto)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetailContainer;


