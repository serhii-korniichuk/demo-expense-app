import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import SignIn from '../AuthPage/SignIn/SignIn';
import SignUp from '../AuthPage/SignUp/SignUp';
import Home from '../Home/Home';

function App() {
  const { user } = useSelector(state => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.length !== 0) {
      navigate('/home');
    } else {
      navigate('/auth/register');
    }
  }, [user]);
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/auth/register" element={<SignUp />} />
      <Route path="/auth/login" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
