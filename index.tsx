import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// --- FUENTES LOCALES ---
import '@fontsource-variable/manrope';      // Carga Manrope (pesos 200-800)
import '@fontsource-variable/noto-sans';    // Carga Noto Sans (pesos variables)
import './index.css';                       // Tus estilos globales

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
