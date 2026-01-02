import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/stores/authStore';
import { HOME_FRONT_URL } from '@/utils/urls/urlFront/privateUrl';

interface PublicRouteProps {
  children: React.ReactElement;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={HOME_FRONT_URL} replace />;
  }

  return children;
};

export default PublicRoute;

