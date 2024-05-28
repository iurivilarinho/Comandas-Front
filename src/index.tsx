import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TotalProvider } from './context/totalContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <TotalProvider>
      <App />
    </TotalProvider>

  </React.StrictMode>
);