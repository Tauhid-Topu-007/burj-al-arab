import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = () => {
  const [loggedInUser] = useContext(UserContext);
  const location = useLocation();

  return loggedInUser.email ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} replace />
  );
};

export default PrivateRoute;
