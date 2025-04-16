jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount'; 
const ItemDetailContainer = () => {
    const { productId } = useParams();
    const [item, setItem] = useState(null);
    useEffect(() => {
        const fetchItem = async () => {
           
            const fetchedItem = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ id: productId, name: `Producto ${productId}`, description: 'Descripción del producto' });
                }, 1000);
            });
            setItem(fetchedItem);
        };
        fetchItem();
    }, [productId]);
    if (!item) return <div>Cargando...</div>;
    return (
        <div>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <ItemCount />
        </div>
    );
};
export default ItemDetailContainer;