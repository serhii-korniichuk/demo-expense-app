import { NavLink, } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { logIn } from '../api';
import { useNavigate } from 'react-router-dom';

export function SignIn() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const handlerForm = async() => {
    if (password && username) {
        const response = await logIn(password, username);
        if (!response.ok) {
          setError('The username or password is invalid');
          throw new Error (`${response.status} - ${response.statusText}`);
        } else {
          setPassword('');
          setUsername('');
          navigate("/home", { replace: true });
        }
    }
  }

  useEffect(() => {
    handlerForm();
  },);
  
  return (
    <>   
      <section className="sign">
        <div className="sign__container">
          <div className="sign__logobox">
            <p className="sign__logomain">InCode</p>
            <p className="sign__logounder">Finance</p>
          </div>
          <p className="sign__title">SIGN IN</p>
          <form onSubmit={handlerForm} action="" className="sign__form">
            <label htmlFor="username" className="sign__labelemail">User Name</label>
            <input
              id="username"
              type="text"
              className="sign__inputemail"
              placeholder="exampleName"
              required
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <label htmlFor="password" className="sign__labelpassword">Password</label>
            <input
              id="password"
              type="password"
              className="sign__inputpassword"
              placeholder="***************" 
              required
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <button
              className="sign__button"
              type="submit" 
            >
              <span className="sign__buttonname">Sign in</span>
            </button>
            <p className="sign__logounder" style={{color: 'red'}}>{error}</p>
            <p className="sign__undernotice">Don’t have account yet? <NavLink to="/auth/register" className="sign__newaccount">New Account</NavLink></p>
          </form>
          <img alt="eye" className="sign__eye" src="./images/eye.svg"></img>
          <img alt="line" className="sign__line" src="./images/line.svg"></img>
        </div>
      </section>
    </>
  );
}