
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { registerUser } from '../api';
import { useNavigate } from 'react-router-dom';

export function SignUp() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  let navigate = useNavigate();
  
  const handlerForm = async() => {
    if (password && username && displayName) {
      if(password.length < 8) {
        setError('Password must be at least 8 characters long');
      }
        const response = await registerUser(password, username, displayName);
        if (!response.ok) {
          if (response.status === 409) {
            setError('Username is already used by another user');
          }
          throw new Error (`${response.status} - ${response.statusText}`);
        } else {
          setPassword('');
          setUsername('');
          setDisplayName('');
          setEmail('');
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
        <p className="sign__title">SIGN UP</p>
        <form onSubmit={handlerForm} action="" className="sign__form">
          <label htmlFor="fullname" className="sign__labelemail">Full Name</label>
          <input
            id="fullname"
            type="text"
            required
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            className="sign__inputemail"
            placeholder="Example Name" />
          <label htmlFor="email" className="sign__labelemail">User Name</label>
          <input
            id="username"
            type="text"
            required
            value={displayName}
            onChange={(event) => {
              setDisplayName(event.target.value);
            }}
            className="sign__inputemail"
            placeholder="Example1488" />
          <label htmlFor="email" className="sign__labelemail">Email Address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            className="sign__inputemail"
            placeholder="example@gmail.com" />
          <label htmlFor="password" className="sign__labelpassword">Password</label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            className="sign__inputpassword"
            placeholder="***************" />
          <button type="submit" className="sign__button">
            <span className="sign__buttonname">Sign up</span>
          </button>
          <p className="sign__logounder" style={{color: 'red'}}>{error}</p>
          <p className="sign__undernotice sign__undernotice--up">
            I have an account. <NavLink to="/auth/login" className="sign__newaccount">Go to Sign in</NavLink>
          </p>
        </form>
        <img alt="eye" className="sign__eye sign__eye--up" src="./images/eye.svg"></img>
        <img alt="line" className="sign__line sign__line--up " src="./images/line.svg"></img>
      </div>
    </section>
    </>
  );
}
