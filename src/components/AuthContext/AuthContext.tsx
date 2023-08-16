import {
  createContext, FC, ReactNode, useContext,
} from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface UserAuthContext {
  token: string | null;
  setToken: (token: string) => void;
}

const AuthContext = createContext<UserAuthContext | null>(null);

export const useAuth = () => useContext(AuthContext) as UserAuthContext;

type Props = {
  children: ReactNode;
};

export const AuthProvider: FC<Props> = ({ children }) => {
  const [token, setToken] = useLocalStorage<string | null>('token', null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
