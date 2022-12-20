import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './global-style';
import { AppRouter } from './pages/app-router';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
};
