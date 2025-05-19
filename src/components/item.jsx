import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => (
  <div className="product">
    <img src={item.image} alt={item.name} style={{ width: "100%", height: "180px", objectFit: "contain" }} />
    <h2>{item.name}</h2>
    <p>Precio: ${item.price}</p>
    <p>Stock: {item.stock}</p>
    <Link to={`/product/${item.id}`}>
      <button>Ver Detalle</button>
    </Link>
  </div>
);

export default Item;