import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import MainPage from './pages/MainPage';

export default function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
