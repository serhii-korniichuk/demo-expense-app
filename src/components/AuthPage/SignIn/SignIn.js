import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { logIn } from '../serverRequest';
import { toast, ToastContainer } from 'react-toastify';
import * as actions from '../../../redux/actions';
import { useEffect } from 'react';

const SignIn = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });

  useEffect(() => {});
  const onSubmit = async data => {
    try {
      const resp = await logIn(data.password, data.userName);
      dispatch(actions.setUser(resp.data.accessToken));
      reset();
    } catch (error) {
      if (error.message === 'Request failed with status code 401') {
        toast.error('Incorrect User Name or Password');
        return;
      }
      toast.error(error.message);
    }
  };
  return (
    <section className="container">
      <div className="auth">
        <div className="header">
          <h2 className="header_title">InCode</h2>
          <p className="header_text">Finance</p>
        </div>
        <div className="form_section">
          <h1 className="form_section_title">SIGN IN</h1>
          <form className="form">
            <div className="form_item">
              <label className="form_label" htmlFor="userName">
                User Name
              </label>
              <input
                className="form_input"
                id="userName"
                type="text"
                placeholder="Example123"
                {...register('userName', {
                  required: 'Field can`t be empty ',
                  minLength: { value: 2, message: 'Too short name' },
                  maxLength: { value: 25, message: 'Too long name' },
                })}
              />
              {errors?.userName && <p className="error">{errors?.userName?.message || 'Error!'}</p>}
            </div>
            <div className="form_item">
              <label className="form_label" htmlFor="password">
                Password
              </label>
              <input
                className="form_input"
                id="password"
                type="password"
                placeholder="********"
                {...register('password', {
                  required: 'Field can`t be empty ',
                  minLength: { value: 8, message: 'Password should be more then 8 symbols' },
                })}
              />
              {errors?.password && <p className="error">{errors?.password?.message || 'Error!'}</p>}
            </div>
            <button className="btn form_btn" type="submit" onClick={handleSubmit(onSubmit)}>
              Sign In
            </button>
          </form>
          <p className="form_section_text">
            Don't have account yet?{' '}
            <NavLink className="form_link" to="/auth/register">
              New Account
            </NavLink>
          </p>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </section>
  );
};

export default SignIn;
