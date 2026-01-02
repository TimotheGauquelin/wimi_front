import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '@/stores/authStore';
import PublicLayout from '@/pages/public/layouts/PublicLayout';
import PrivateLayout from '@/pages/private/layouts/PrivateLayout';
import Login from '@/pages/public/auth/Login';
import HomePage from '@/pages/private/homepage/HomePage';
import { LOGIN_FRONT_URL } from '@/utils/urls/urlFront/publicUrl';
import { HOME_FRONT_URL } from '@/utils/urls/urlFront/privateUrl';

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Login />} />
          <Route path={LOGIN_FRONT_URL} element={<Login />} />
        </Route>

        <Route element={<PrivateLayout />}>
          <Route path={HOME_FRONT_URL} element={<HomePage />} />
        </Route>

        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? HOME_FRONT_URL : "/"} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

