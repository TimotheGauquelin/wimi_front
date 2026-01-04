import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import AppRoutes from './routes/AppRoutes';
import Modal from './components/modal/Modal/Modal';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes />
    <Modal />
  </React.StrictMode>,
);

