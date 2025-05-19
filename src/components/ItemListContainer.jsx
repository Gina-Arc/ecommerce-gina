import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const productosCol = collection(db, 'productos');
    const q = categoryId
      ? query(productosCol, where('category', '==', categoryId))
      : productosCol;
    getDocs(q).then(snapshot => {
      setItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;
  return <ItemList items={items} />;
};

export default ItemListContainer;