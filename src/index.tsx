import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

import { store } from './app/store';
import App from './App';
import { MuiTheme } from './helper';

import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <ThemeProvider theme={MuiTheme}>
            <App />
        </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
