import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './hooks/userContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/demo-expense-app">
      <ThemeProvider theme={theme}>
        <UserProvider>
          <App />
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
