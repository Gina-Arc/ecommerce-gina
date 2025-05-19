// list.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const { addItem } = useCart();

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
        <div className="product" key={item.id}>
          <h2>{item.name}</h2>
          <Link to={`/product/${item.id}`}>Ver Detalle</Link>
          <button onClick={() => addItem(item)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
