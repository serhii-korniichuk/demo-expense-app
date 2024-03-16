import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import React, { lazy } from 'react';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('../pages/Home/Home'));
const Auth = lazy(() => import('../pages/Auth/Auth'));

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="colored"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute restricted>
              <Auth />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <div>
              <p>Sorry, this page not found!</p>
            </div>
          }
        />
      </Routes>
    </>
  );
};
