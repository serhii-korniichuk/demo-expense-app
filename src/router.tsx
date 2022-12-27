import React, { ReactNode } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from './pages/home';
import { SignUp } from './pages/sign-up';
import { SignIn } from './pages/signi-in';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface AppComponentProps {
  children: ReactNode;
}

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);

export const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
      default: '#1D283A'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#F1F2F1',
    },
  },
});

const AppComponent: React.FC<AppComponentProps> = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export const RouterComponent: React.FC = () => {
  return (
    <AppComponent>
        <RouterProvider router={router} />
    </AppComponent>
  );
};
