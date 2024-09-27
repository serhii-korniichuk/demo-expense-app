import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

export default function PrivateRoute({ children, redirectTo = '/' }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  if (isLoggedIn) {
    return children;
  }
  return <Navigate to={redirectTo} />;
}
