import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {observer} from 'mobx-react-lite'


type Props = {
  props: any
}

interface ISignUpData {
  password: string;
  username: string;
  displayName: string;
}

const SignUpForm: React.FC<Props> = (props: Props) => {
  const [values, setValues] = React.useState<ISignUpData>({
    password: '',
    username: '',
    displayName: '',
  })
  const REGISTER_URL: string = 'https://incode-backend-dev.herokuapp.com/auth/register'
  const userDataForRegister = {
    "password": "kristian1504",
    "username": "kristian1504",
    "displayName": "Kristian Popovych"
  }
  const handleClick = (): void => {
    props.props('SignInForm')
  }

  /*  useEffect(() => {
     axios.post(REGISTER_URL, userDataForRegister).then((result) => console.log(result));
     console.log('Requesting register...')
   }, []); */

  console.log(`set from local storage: ${localStorage.getItem("token")}`)

  return (
    <div>
      <p>SignUpForm</p>
      <input type="text" placeholder='username' value={values.username} />
      <p></p>
      <button onClick={handleClick}>Show SignInForm</button>
    </div>
  )
}

export default observer(SignUpForm)