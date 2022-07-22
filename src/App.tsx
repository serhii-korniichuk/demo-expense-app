import { useState } from 'react';
import {
  Routes,
  Route,
  HashRouter as Router,
  Navigate,
} from 'react-router-dom';
import { TokenPair } from './interfaces/User.interface';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

const TOKENS_KEY = 'tokens';

const getTokensFromLocalStorage = (): TokenPair | null => {
  const str = localStorage.getItem(TOKENS_KEY);
  if (str === '' || str === null) {
    return null;
  }

  const tokens = JSON.parse(str);
  return tokens;
};

const setTokensToLocalStorage = (tokens: TokenPair | null): void => {
  const str = !tokens ? '' : JSON.stringify(tokens);
  localStorage.setItem(TOKENS_KEY, str);
};

export default function App(): JSX.Element {
  const [tokens, setTokens] = useState<TokenPair | null>(
    getTokensFromLocalStorage(),
  );

  const handleTokensChange = (newTokens: TokenPair | null): void => {
    setTokensToLocalStorage(newTokens);
    setTokens(newTokens);
  };

  const authorized = !!tokens;
  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={
            <HomePage authorized={authorized} setTokens={handleTokensChange} />
          }
        />
        <Route
          path="/auth"
          element={
            <AuthPage authorized={authorized} setTokens={handleTokensChange} />
          }
        />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
}
