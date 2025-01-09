import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import { StrictMode } from 'react';

const root = createRoot(document.getElementById('root')); // Créer un root ici
root.render(  // Rendu de l'application
  <StrictMode>
    <App />
  </StrictMode>
)