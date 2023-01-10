import React from 'react';
import css from '../../app.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import Decor from "../shared/art/Decor";
import Vector from "../shared/art/Vector";
import {getSignOut} from "../../store/UserSlice";

const Home = () => {
  const dispatch = useDispatch();
  const {isAuth} = useSelector(state => state.user);
  const storage = window.localStorage;

  if (!isAuth && !storage.getItem('accessToken'))
    return <Navigate to='/auth' replace/>

  const handleSignOut = () => {
    dispatch(getSignOut(storage.getItem('accessToken')));
  }

  return (
    <>
      <h1 className={css.pageTitle}>Congratulations
        <div className={css.decor}>
          <Decor/>
        </div>
      </h1>
      <p className={css.welcomeText}>Now you are on the main page. Soon we will provide you with detailed feedback on the result of your work</p>
      <button
        className={css.logOutButton}
        type='button'
        onClick={handleSignOut}
      >Sign out</button>

      <Vector/>
    </>
  );
};

export default Home;