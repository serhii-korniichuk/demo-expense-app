import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Auth, Home, Page404 } from '../pages';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth',
    element: <Auth />,
  },
  {
    path: '*',
    element: <Page404 />,
  },
];
export const routesConfig = createBrowserRouter(routes);
