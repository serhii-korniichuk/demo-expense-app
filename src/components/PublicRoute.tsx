import { Navigate } from 'react-router-dom';
import { useUser } from '../hooks/userContext';
import React from 'react';

interface IProps {
  children: React.ReactNode;
  redirectPath?: string;
  restricted?: boolean;
}

const PublicRoute: React.FC<IProps> = ({
  children,
  redirectPath = '/home',
  restricted = false,
}): any => {
  const { isLoggedIn } = useUser();
  const shouldRedirect = isLoggedIn && restricted;

  if (shouldRedirect) {
    return <Navigate to={redirectPath} />;
  }
  return children;
};

export default PublicRoute;
