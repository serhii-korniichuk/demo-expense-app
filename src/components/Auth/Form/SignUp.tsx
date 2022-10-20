import classNames from "classnames"
import { useState } from "react";
import { register } from "../../../api/auth";
import { Input } from "./Input"

interface Props {
  loading: boolean,
  setLoading: (v:boolean) => void,
  needToRegister: boolean,
  setNeedToRegister: (v:boolean) => void,
  errorMessage: string,
  setErrorMessage: (v:string) => void,
  fullName: string,
  setFullName: (v:string) => void,
  username: string,
  setUsername: (v:string) => void,
  password: string,
  setPassword: (v:string) => void,
  confirmPassword: string,
  setConfirmPassword: (v:string) => void,
}

export const SignUp: React.FC<Props> = (props) => {
  const {
    loading,
    setLoading,
    needToRegister,
    setNeedToRegister,
    errorMessage,
    setErrorMessage,
    fullName,
    setFullName,
    username,
    setUsername,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  } = props;
  const [isUserError, setIsUserError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isUsernameBusy, setIsUsernameBusy] = useState(false);

  const registerUser = async () => {
    const newUser = {
      username,
      password,
      displayName: fullName
    }
    setLoading(true);
    setIsUserError(false);
    await register(newUser).then(res => {
      if (res === 409) {
        setNeedToRegister(true);
        setIsUsernameBusy(true);
      } else {
        setPassword('');
        setNeedToRegister(false);
      }
    }).catch(() => {
      setIsUserError(true);
      setErrorMessage(`Can't register`);
    });
    setLoading(false);
  };

  const isValidConfirmPassword = () => {
    return password === confirmPassword;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setErrorMessage('');
    setLoading(true);
    
    if (isValidConfirmPassword()) {
      try {        
        await registerUser();
      } catch (error) {
        setIsUserError(true);
        setErrorMessage('Something went wrtong');
      } 
    } else {
      setIsPasswordError(true);
      setNeedToRegister(true);
    }
    setLoading(false);
  };

  return <form 
    onSubmit={handleSubmit} 
    className="incodeForm"
  >
    <h1 className="incodeForm__title">
      Sign Up
    </h1>

    <div className="incodeForm__field">
      <Input 
        label={'Full Name'}
        loading={loading}
        needToRegister={needToRegister}
        errorMessage={errorMessage}
        value={fullName}
        setValue={setFullName}
        placeholder={'Example Name'}
      />

      <Input 
        label={'User Name'}
        loading={loading}
        needToRegister={needToRegister}
        errorMessage={errorMessage}
        value={username}
        setValue={setUsername}
        placeholder={'Example123'}
        isUserError={isUserError}
        setIsUserError={setIsUserError}
        isUsernameBusy={isUsernameBusy}
      />

      <Input 
        label={'Password'}
        loading={loading}
        needToRegister={needToRegister}
        errorMessage={errorMessage}
        value={password}
        setValue={setPassword}
        isPassword
        placeholder={'***************'}
      />

      <Input 
        label={'Confirm Password'}
        loading={loading}
        needToRegister={needToRegister}
        errorMessage={errorMessage}
        value={confirmPassword}
        setValue={setConfirmPassword}
        isPassword
        setIsPasswordError={setIsPasswordError}
        isPasswordError={isPasswordError}
        placeholder={'***************'}
      />
    </div>

    <button
      type="submit"
      disabled={ 
        isPasswordError
        || isUserError 
        || !username 
        || !fullName 
        || !password 
        || !confirmPassword
      }
      className={classNames('incodeForm__button', {
        'is-loading': loading
      })}
    >
      Sign Up
    </button>

    <div className="incodeForm__redirect">
      <h4 className="incodeForm__redirect--text">
        I have an account.
      </h4>

      <button 
        className="incodeForm__redirect--link"
        onClick={() => setNeedToRegister(false)}
      >
        &nbsp; Go to Sign in
      </button>
    </div>
  </form>
}