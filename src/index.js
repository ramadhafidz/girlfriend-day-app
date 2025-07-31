import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. Impor BrowserRouter
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 2. Bungkus App dengan BrowserRouter di sini */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);