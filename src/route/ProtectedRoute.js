import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Profile } from '../components/Profile/Profile';

const ProtectedRoute = ({ element,  }) => {
  const userId = localStorage.getItem('userId');
  const location = useLocation();

  if (!userId) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return <Profile />
};

export default ProtectedRoute;
