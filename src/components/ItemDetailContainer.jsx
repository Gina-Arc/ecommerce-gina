// ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, 'productos', productId);
    getDoc(docRef).then(docSnap => {
      setItem(docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null);
      setLoading(false);
    });
  }, [productId]);

  if (loading) return <p>Cargando producto...</p>;
  if (!item) return <p>Producto no encontrado</p>;
  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;


