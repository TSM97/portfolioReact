import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import NextUIProvider from './Context/NextUIProvider';
import './index.css';
import LenisScrollProvider from './Context/LenisScrollProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <LenisScrollProvider>
        <App />
      </LenisScrollProvider>
    </NextUIProvider>
  </React.StrictMode>
);
