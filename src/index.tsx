import React from 'react';
import { Provider } from 'react-redux';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';

import { store } from 'store';
import { theme } from 'libraries/mui';

import { App } from 'App';

import { ErrorBoundary } from 'components/common/error-boundary';

import 'styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  </ThemeProvider>,
);
