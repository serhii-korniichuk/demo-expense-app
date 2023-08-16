import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './components/AuthContext';
import { AuthPage } from './pages/AuthPage';
import { HomePage } from './pages/HomePage';
import { MainLayout } from './components/MainLayout';

export const App: React.FC = () => {
  const { token } = useAuth();

  return (
    <MainLayout pageType={!token ? 'auth' : 'home'}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          success: {
            style: {
              background: 'green',
            },
          },

          error: {
            duration: 3000,
            theme: {
              primary: 'red',
              secondary: 'black',
            },
          },
        }}
      />

      {!token
        ? (<AuthPage />)
        : (<HomePage />)}
    </MainLayout>
  );
};
