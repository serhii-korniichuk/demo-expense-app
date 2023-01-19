import { ThemeProvider } from '@mui/material';
import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from './model/reducer/store';
import { routesConfig } from './routes';
import { theme } from './styles/theme';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routesConfig} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
