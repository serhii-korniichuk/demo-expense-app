import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Box } from '@mui/material';

import { ToastContainer } from 'react-toastify';

import { routes } from 'constants/routes';
import { selectUser } from 'store/selectors/user';

import { useAuth } from 'hooks/useAuth';

import { Auth } from 'pages/auth';
import { Home } from 'pages/home';
import { Page404 } from 'pages/page404';

import { PrivateRoute } from 'components/private-route';
import { Loader } from 'components/common/loader';

import 'react-toastify/dist/ReactToastify.css';

export const App: FC = () => {
  const { isLoading } = useSelector(selectUser);

  useAuth();

  if (isLoading) {
    return (
      <Box height="100vh">
        <Loader />
      </Box>
    );
  }

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path={routes.home}
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path={routes.auth} element={<Auth />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};
