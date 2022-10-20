import ReactDOM from 'react-dom/client';
import 'bulma/css/bulma.css';
import './styles/index.scss';
import { App } from './App';
import { AuthProvider } from './components/Auth/AuthContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
