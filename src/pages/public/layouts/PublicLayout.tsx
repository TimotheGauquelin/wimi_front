import React from 'react';
import { Outlet } from 'react-router-dom';

const PublicLayout: React.FC = () => {

  const LOGO_URL = `/assets/images/todoapp_logo.svg`;

  return (
    <div className="min-h-screen bg-light-blue flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full bg-white p-6 rounded-lg max-w-md inset-shadow-main">
        <div className="flex justify-center mb-4">
          <img src={LOGO_URL} alt="Logo ToDoApp" className="h-12 w-auto" />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;

