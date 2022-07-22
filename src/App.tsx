import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

export default function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
}
