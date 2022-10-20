import React, { useState } from 'react';
import { AuthForm } from './Form/AuthForm';

export const AuthContext = React.createContext<any>(null);

type Props = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [accessToken, setAccessToken] = useState('');

  if (!accessToken) {
    return <AuthForm setAccessToken={setAccessToken} />;
  }
 
  return (
    <AuthContext.Provider value={[accessToken, setAccessToken]}>
      {children}
    </AuthContext.Provider>
  );
};
