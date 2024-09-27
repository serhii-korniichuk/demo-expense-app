import { useLocation } from 'react-router-dom';

import { Login } from './login/login';
import { Register } from './registr/register';

export const Auth = () => {
  const { pathname } = useLocation();

  return pathname === '/auth/register' ? <Register /> : <Login />;
};
