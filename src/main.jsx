// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext' // 👈 Importar el contexto

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider> {/* 👈 Envolvemos App en CartProvider */}
      <App />
    </CartProvider>
  </StrictMode>,
)
