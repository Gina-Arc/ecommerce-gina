import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';

const CheckoutForm = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [orderId, setOrderId] = useState('');
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const order = {
      buyer: form,
      items: cartItems,
      total: totalPrice,
      date: Timestamp.fromDate(new Date())
    };
    const docRef = await addDoc(collection(db, 'orders'), order);
    setOrderId(docRef.id);
    clearCart();
  };

  if (orderId)
    return (
      <div>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <b>{orderId}</b></p>
      </div>
    );

  return (
    <form onSubmit={handleSubmit}>
      <h2>Finalizar compra</h2>
      <input name="nombre" type="text" placeholder="Nombre" required value={form.nombre} onChange={handleChange} />
      <input name="email" type="email" placeholder="Email" required value={form.email} onChange={handleChange} />
      <input name="telefono" type="tel" placeholder="Teléfono" required value={form.telefono} onChange={handleChange} />
      <button type="submit">Comprar</button>
    </form>
  );
};

export default CheckoutForm;