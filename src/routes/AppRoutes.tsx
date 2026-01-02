import HomePage from '@/pages/private/homepage/HomePage';
import Login from '@/pages/public/auth/Login';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const AppRoutes: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={
          <Navigate to="/login" replace />
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

