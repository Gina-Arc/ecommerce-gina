// src/components/ItemListContainer.js
import React from 'react';
const ItemListContainer = ({ welcomeMessage }) => {
    return (
        <div className="item-list-container">
            <h1>{welcomeMessage}</h1>
            {/* Aquí puedes mapear tus productos en el futuro */}
        </div>
    );
};
export default ItemListContainer;