import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/slices/userSlice';
import Form from './Form';
import 'styles/login.css';

export const SignUp = () => {
const dispatch = useDispatch();
const navigate = useNavigate()


  const handleRegister = (userName, password, fullName) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userName, password, fullName)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch(console.error);
  };

  return <Form title="Sign Up" handleClick={handleRegister} />;
};
