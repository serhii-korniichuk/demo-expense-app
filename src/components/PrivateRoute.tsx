import { Navigate } from 'react-router-dom';
import { useUser } from '../hooks/userContext';
import { toast } from 'react-toastify';
import React from 'react';

interface IProps {
  children: React.ReactNode;
  redirectPath?: string;
}

const PrivateRoute: React.FC<IProps> = ({
  children,
  redirectPath = '/',
}): any => {
  const { isLoggedIn } = useUser();

  if (!isLoggedIn) {
    toast.info(
      'You do not have access to this page. Register or login to your account.'
    );
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default PrivateRoute;
