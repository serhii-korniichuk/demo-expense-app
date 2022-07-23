import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import { observer } from 'mobx-react-lite'
import { Context } from '../../..';

type Props = {
  props: any
}

const SignInForm: React.FC<Props> = (props: Props) => {
  const LOGIN_URL: string = 'https://incode-backend-dev.herokuapp.com/auth/login'
  const userDataForLogin = {
    "username": "kristian1504",
    "password": "kristian1504"
  };
  const { store } = useContext(Context);

  const handleClick = (): void => {
    props.props('SignUpForm')
  };

  const login = () => {
    store.login("kristian1504", "kristian1504")
  }


  /*   useEffect(() => {
      axios.post(LOGIN_URL, userDataForLogin)
      .then((result) => {
        console.log(result.data.accessToken)
        localStorage.setItem('token', result.data.accessToken);
      });
      console.log('Requesting login...')
    }, []); */




  return (
    <div>
      <p>SignInForm</p>
      <button onClick={handleClick}>Show SignUpForm</button>
      <p></p>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default observer(SignInForm) 