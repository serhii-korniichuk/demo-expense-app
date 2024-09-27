import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import Container from 'components/Container';
import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';
import Layout from 'components/Layout';

const Home = lazy(() =>
  import('pages/Home/Home' /* webpackChunkName: "home" */),
);
const Auth = lazy(() =>
  import('pages/Auth/Auth' /* webpackChunkName: "auth" */),
);

export default function App() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Container>
      <Suspense
        fallback={
          <h1 style={{ textAlign: 'center', color: 'white' }}>Loading..</h1>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/auth" />} />
            <Route
              path="auth"
              element={
                <PublicRoute restricted redirectTo="/home">
                  <Auth />
                </PublicRoute>
              }
            />
            <Route
              path="home"
              element={
                <PrivateRoute redirectTo="/auth">
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="*"
              element={
                isLoggedIn ? (
                  <Navigate to="/home" replace />
                ) : (
                  <Navigate to="/auth" replace />
                )
              }
            />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer autoClose={2000} />
    </Container>
  );
}
