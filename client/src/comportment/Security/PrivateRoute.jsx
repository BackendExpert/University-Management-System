import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import secureLocalStorage from "react-secure-storage";

const isLoggedIn = () => {
  // Check both localStorage and secureLocalStorage for authentication tokens
  return (
    localStorage.getItem('LoginToken') !== null ||
    secureLocalStorage.getItem('Login1') !== null
  );
};

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  if (!isLoggedIn()) {
    // Redirect to login if not authenticated
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  // Render the protected component if authenticated
  return children;
};

export default PrivateRoute;