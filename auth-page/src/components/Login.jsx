import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/slices/userSlice';
import Form from './Form';
import 'styles/login.css';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (userName, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, userName, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch(() => alert("Invalid user"));
  };

  return <Form title={'Sign In'} handleClick={handleLogin} />;
};

export default Login;
