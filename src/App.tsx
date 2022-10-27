import React from 'react';
import { useAuth } from './components/AuthContext';
import { AuthPage } from './pages/AuthPage';
import { HomePage } from './pages/HomePage';
import { MainLayout } from './components/MainLayout';

export const App: React.FC = () => {
  const { token } = useAuth();

  return (
    <MainLayout pageType={!token ? 'auth' : 'home'}>
      {!token
        ? (<AuthPage />)
        : (<HomePage />)}
    </MainLayout>
  );
};
