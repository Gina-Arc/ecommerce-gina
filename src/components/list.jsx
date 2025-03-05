
import React from 'react';
const ItemListContainer = ({ welcomeMessage }) => {

    const products = [
        { id: 1, name: 'Producto 1', price: 100 },
        { id: 2, name: 'Producto 2', price: 200 },
        { id: 3, name: 'Producto 3', price: 300 },
    ];
    return (
        <div className="item-list-container">
            <h1>{welcomeMessage}</h1>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-item">
                        <h2>{product.name}</h2>
                        <p>Precio: ${product.price}</p>
                        <button>Añadir al carrito</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ItemListContainer;