
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
const ItemListContainer = () => {
  const { categoryId } = useParams();
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
    <div>
      <h1>Catálogo de Productos</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/product/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ItemListContainer;