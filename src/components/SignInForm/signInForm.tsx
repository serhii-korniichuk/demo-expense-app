import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import style from './signInForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { FormType } from '../../types/form';
import { Login } from '../../api/requests.js';
import { Loader } from '../Loader';
import { FormFieldError } from '../FormFieldError';
import { toast } from 'react-toastify';

interface Props {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
}

export const SingInForm: React.FC<Props> = ({
  isLoading,
  setIsLoading,
}) => {
  const [isVisiblePass, setIsVisiblePass] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    register,
    formState: {
      errors
    },
    handleSubmit
  } = useForm<FormType>();

  const handleSignIn = async (data: FormType) => {
    const { username, password } = data;
    setIsLoading(true);
    try {
      const login = await Login(username, password);
      if (login.status === 201) {
        toast.success('Login successful!');
        navigate('/', { replace: true });
        return login;
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
    finally {
      setIsLoading(false);
    }
  };

  const handleVisiblePass = () => {
    setIsVisiblePass(!isVisiblePass);
  };
  return (
    <form
      action="submit"
      className={style.for}
      onSubmit={handleSubmit(handleSignIn)}
    >
      <label htmlFor='userInput'>
        <p className={style.input_title}>User Name</p>
      </label>
      <div className={style.input__row}>
        <input
          type="text"
          id='userInput'
          placeholder='Enter name'
          className={style.input__field}
          {...register('username', {
            required: 'Field is requared',
            minLength: {
              value: 5,
              message: 'Can\'t be less than 5 characters'
            }
          })}
        />
      </div>
      <FormFieldError error={errors?.username?.message} />
      <label htmlFor='passInput'>
        <p className={style.input_title}>Password</p>
      </label>
      <div className={style.input__row}>
        <input
          type={isVisiblePass ? 'text' : 'password'}
          id='passInput'
          placeholder='Enter password'
          className={style.input__field}
          {...register('password', {
            required: 'Field is requared',
            minLength: {
              value: 8,
              message: 'Can\'t be less than 8 characters'
            }
          })}
        />

        <img
          src={isVisiblePass ? './icon/eye.svg' : './icon/slicedEye.svg'}
          alt="eye_icon"
          className={style.input__icon}
          onClick={handleVisiblePass}
        />
      </div>
      <FormFieldError error={errors?.password?.message} />
      <button className={style.form__btn}>{!isLoading ? 'Sign In' : <Loader />}</button>
    </form>
  );
};