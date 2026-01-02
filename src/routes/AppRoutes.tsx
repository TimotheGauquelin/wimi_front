import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '@/stores/authStore';
import PublicLayout from '@/pages/public/layouts/PublicLayout';
import PrivateLayout from '@/pages/private/layouts/PrivateLayout';
import Login from '@/pages/public/auth/Login';
import HomePage from '@/pages/private/homepage/HomePage';
import ProtectedRoute from '@/components/routes/ProtectedRoute';
import PublicRoute from '@/components/routes/PublicRoute';
import { LOGIN_FRONT_URL } from '@/utils/urls/urlFront/publicUrl';
import { HOME_FRONT_URL, PROFILE_FRONT_URL, SETTINGS_FRONT_URL, TASKS_FRONT_URL } from '@/utils/urls/urlFront/privateUrl';
import ProfilePage from '@/pages/private/profilePage/ProfilePage';
import SettingsPage from '@/pages/private/settingsPage/SettingsPage';
import TaskPage from '@/pages/private/tasksPage/TaskPage';

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <PublicRoute>
              <PublicLayout />
            </PublicRoute>
          }
        >
          <Route path="/" element={<Login />} />
          <Route path={LOGIN_FRONT_URL} element={<Login />} />
        </Route>

        <Route
          element={
            <ProtectedRoute>
              <PrivateLayout />
            </ProtectedRoute>
          }
        >
          <Route path={HOME_FRONT_URL} element={<HomePage />} />
          <Route path={PROFILE_FRONT_URL} element={<ProfilePage />} />
          <Route path={SETTINGS_FRONT_URL} element={<SettingsPage />} />
          <Route path={TASKS_FRONT_URL} element={<TaskPage />} />
        </Route>

        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? HOME_FRONT_URL : LOGIN_FRONT_URL} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

