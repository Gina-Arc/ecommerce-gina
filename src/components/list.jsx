
// src/components/list.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const { addItem } = useCart();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const fetchedItems = await new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 1, name: 'Producto 1', category: 'cat1' },
            { id: 2, name: 'Producto 2', category: 'cat1' },
            { id: 3, name: 'Producto 3', category: 'cat2' },
          ]);
        }, 1000);
      });
      const filteredItems = categoryId 
        ? fetchedItems.filter(item => item.category === categoryId)
        : fetchedItems;
      setItems(filteredItems);
    };
    fetchItems();
  }, [categoryId]);

  return (
    <div className="products">
      {items.map(item => (
        <div key={item.id} className="product">
          <h3>{item.name}</h3>
          <Link to={`/product/${item.id}`}>Ver detalle</Link>
          <br />
          <button onClick={() => addItem(item)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
