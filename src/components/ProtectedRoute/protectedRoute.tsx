import React, { ReactElement } from 'react';
import { Navigate } from 'react-router';

interface Props {
  redirectPath?: string
  children: ReactElement
}

export const ProtectedRoute: React.FC<Props> = ({
  redirectPath = '/signUp',
  children
}) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
