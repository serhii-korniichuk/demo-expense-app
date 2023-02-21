import React, {FormEvent, useState} from 'react';
import {EyeOffIcon} from '../eyeIcons/eyeOffIcon';
import {EyeOnIcon} from '../eyeIcons/eyeOnIcon';
import {signInUser} from '../../api/manageUserAccess';
import {SignInToken} from '../../types/SignInToken';
import classes from './SignForms.module.css';

interface Props {
  setLogInStatus: (arg: boolean) => void
}

export const SignInForm: React.FC<Props> = (props) => {
  const { setLogInStatus } = props;

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const currentInputType = showPassword ? 'text' : 'password';

  const buttonActive = !userName || !password;

  const clearFields = () => {
    setUserName('');
    setPassword('');
  }

  const saveToken = (token: SignInToken) => {
    localStorage.setItem('accessToken', JSON.stringify(token.accessToken));
    localStorage.setItem('refreshToken', JSON.stringify(token.refreshToken));
  }

  const handleLogInUser = (e: FormEvent) => {
    e.preventDefault();

    signInUser(
      userName,
      password,
    )
      .then((token) => {
        saveToken(token);
        clearFields();
        setLogInStatus(true);
      })
      .catch((error) => {
        switch (error.message) {
          case 'Unauthorized':
            window.alert('Please enter right credentials');
            break;
          case 'Not Found':
            window.alert('User is not found');
            break;
          default:
            window.alert('Something went wrong, try again!');
            break;
        }
      })
  };

  return (
    <form onSubmit={handleLogInUser}>

      <label
        htmlFor="user-name"
        className={classes.text_field_label}
      >
        User Name
        <input
          type="text"
          id="user-name"
          className={classes.text_field_input}
          placeholder="Example123"
          autoComplete='username'
          required
          minLength={4}
          disabled={false}
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
      </label>


      <label
        htmlFor="password"
        className={`${classes.text_field_label} ${classes.text_field_label__last}`}
      >
        Password
        <input
          type={currentInputType}
          id="password"
          className={classes.text_field_input}
          placeholder="************"
          autoComplete='new-password'
          required
          minLength={8}
          disabled={false}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button
          type="button"
          className={classes.text_field_eyeIcon}
          onClick={() => setShowPassword(prev => !prev)}
        >
          {showPassword ? <EyeOffIcon /> : <EyeOnIcon />}
        </button>
      </label>

      <button
        type="submit"
        className={classes.button}
        disabled={buttonActive}
      >
        Sign In
      </button>
    </form>
  )
}

