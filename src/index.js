// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Make sure it's App.jsx, not App.js
import './index.css'; // Tailwind styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
