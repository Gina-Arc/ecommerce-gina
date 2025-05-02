import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const fetchedItem = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ id, name: `Producto ${id}`, description: `Descripción del producto ${id}` });
        }, 1000);
      });
      setItem(fetchedItem);
    };
    fetchItem();
  }, [id]);

  if (!item) return <div>Cargando producto...</div>;

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetailContainer;
