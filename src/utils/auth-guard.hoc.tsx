import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../core/store';

type AuthGuardProps = {
  anonymouse?: boolean;
  authorized?: boolean;
  fallback?: string;
  children: ReactNode;
};

const AuthGuard = (props: AuthGuardProps) => {
  const { anonymouse = false, authorized = true, fallback = '/' } = props;
  const { user } = useSelector((state: RootState) => state.user);

  switch (true) {
    case !anonymouse && !user:
    case authorized && !user:
      return <Navigate to={fallback} />;
  }

  return <>{props.children}</>;
};

export const authGuardHOC = (element: ReactNode, params?: Omit<AuthGuardProps, 'children'>) => (
  <AuthGuard {...params}>{element}</AuthGuard>
);
