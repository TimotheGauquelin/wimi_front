import React from 'react';
import { Outlet } from 'react-router-dom';

const PrivateLayout: React.FC = () => {

  return (
    <div>
      <h1>Private Layout</h1>
      <Outlet />
    </div>
  );
};

export default PrivateLayout;

