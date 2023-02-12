import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectUser } from 'store/selectors/user';

import { routes } from 'constants/routes';

import { PrivateRouteProps } from './types';

export const PrivateRoute: FC<PrivateRouteProps> = ({
  children,
  path = routes.auth,
}) => {
  const { isAuthenticated } = useSelector(selectUser);

  console.log('isAuthenticated', isAuthenticated);

  return isAuthenticated ? children : <Navigate to={path} />;
};
