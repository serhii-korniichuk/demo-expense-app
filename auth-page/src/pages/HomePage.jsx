import React from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/use-auth';
import { removeUser } from 'store/slices/userSlice';
import Home from './../components/Home/Home';
import 'styles/home.css';

const Homepage = () => {
  const dispatch = useDispatch();

  const { isAuth } = useAuth();

  return isAuth ? (
    <section className="main">
      <div className="top">
        <div className="top__title">InCode</div>
        <div className="top__small_title">Finance</div>
      </div>
      <Home />
      <button className="logout" onClick={() => dispatch(removeUser())}>
        Log Out
      </button>
    </section>
  ) : (
    <Navigate to="/login" />
  );
};

export default Homepage;