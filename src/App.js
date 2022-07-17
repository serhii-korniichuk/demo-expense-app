import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { SignUp } from './components/SignUp.js';
import { SignIn } from './components/SignIn.js';
import { Home } from './components/Home.js';

function App() {
  
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<SignUp />} />
        <Route path="/auth/register" element={<SignUp />} />
        <Route path="/auth/login" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
