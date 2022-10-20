import classNames from "classnames"
import { useEffect, useState } from "react";
import { login } from "../../../api/auth";
import { getUserToken } from "../../../api/users";
import { Input } from "./Input"

interface Props {
  loading: boolean,
  setLoading: (v:boolean) => void,
  needToRegister: boolean,
  setNeedToRegister: (v:boolean) => void,
  errorMessage: string,
  setErrorMessage: (v:string) => void,
  setAccessToken:(v: string) => void,
  username: string,
  setUsername: (v:string) => void,
  password: string,
  setPassword: (v:string) => void,
}

export const SignIn: React.FC<Props> = (props) => {
  const {
    loading,
    setAccessToken,
    needToRegister,
    setNeedToRegister,
    errorMessage,
    username,
    setUsername,
    password,
    setPassword,
    setLoading,
    setErrorMessage,
  } = props;
  const [isUserError, setIsUserError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const saveUser = (token:string) => {    
    localStorage.setItem('token', JSON.stringify(token));
  };

  useEffect(() => {
    const tokenData = localStorage.getItem('token');

    if (!tokenData) {
      return;
    }
    try {
      const accessToken = JSON.parse(tokenData) as string;
      setAccessToken(accessToken);
    } catch (error) {
      throw new Error('You need to register');
    }
  }, []);

  const loginUser = async() => {
    const token = await login(username, password).then(async (res) => {
      if (res?.accessToken) {
        setAccessToken(res.accessToken)
        return res.accessToken;
      } else {
        setIsUserError(true);
        return null;
      }
    });
    
    if (token) {
      await getUserToken(token);
      saveUser(token);
    }
  }
  
  const handleNewAccount = () => {
    setNeedToRegister(true);
    setUsername('');
    setPassword('');
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsUserError(false);
    setIsPasswordError(false);
    setErrorMessage('');
    setLoading(true);

    try {
      await loginUser();
    } catch (error) {
      setErrorMessage('Something went wrtong');
      setIsPasswordError(true);
    } finally {
      setLoading(false);
    }
  }

  return <form 
      onSubmit={handleSubmit} 
      className="incodeForm"
  >
    <h1 className="incodeForm__title">
      Sign in
    </h1>

    <div className="incodeForm__field">
      <Input 
        label={'User Name'}
        loading={loading}
        needToRegister={needToRegister}
        errorMessage={errorMessage}
        value={username}
        setValue={setUsername}
        placeholder={'Example123'}
        isUserError={isUserError}
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
        isPasswordError={isPasswordError}
      />
    </div>

    <button
      type="submit"
      disabled={!username || !password}
      className={classNames('incodeForm__button', {
        'is-loading': loading
      })}
    >
      Sign In
    </button>

    <div className="incodeForm__redirect">
      <h4 className="incodeForm__redirect--text">
        Don’t have account yet?
      </h4>

      <button
        onClick={() => handleNewAccount()}
        className="incodeForm__redirect--link"
      >
        &nbsp; New Account
      </button>
    </div>
  </form>
}