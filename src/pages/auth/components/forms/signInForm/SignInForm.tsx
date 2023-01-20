import { useFormik } from 'formik';
import * as yup from 'yup';
import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAction } from '../../../../../hooks';
import { getSelf, login } from '../../../../../model/api/api';
import { setUser } from '../../../../../model/reducer/user/reducer';
import { ShowPasswordIcon, StyledInput } from '../../../../../shared/components';
import classes from '../form.module.scss';

const validationSchema = yup.object({
  username: yup
    .string()
    .min(2, 'User Name should be of minimum 2 characters length')
    .required('User Name is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const SignInForm = (): JSX.Element => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [boundedSetUser] = useAction([setUser]);
  const navigate = useNavigate();
  const handleClickShowPassword = (): void => {
    setShowPassword((show) => !show);
  };

  const initialValues = {
    username: '',
    password: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async ({ password, username }) => {
      await login({ password, username })
        .then(({ data: { accessToken, refreshToken } }) => {
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
        })
        .then(async () => await getSelf())
        .then(({ data }) => {
          boundedSetUser(data);
        })
        .then(async () => {
          await formik.setValues(initialValues);
        })
        .then(() => {
          navigate('/');
        })
        .catch((error) => {
          console.error(error.response.data.message);
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={`${classes.form} ${classes.signIn}`}>
      <StyledInput
        name="username"
        label="User Name"
        type="text"
        variant="standard"
        placeholder="Example123"
        onChange={formik.handleChange}
        value={formik.values.username}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
      />
      <StyledInput
        label="Password"
        name="password"
        placeholder="***********"
        variant="standard"
        type={showPassword ? 'text' : 'password'}
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        InputProps={{
          endAdornment: (
            <ShowPasswordIcon statement={showPassword} handleClick={handleClickShowPassword} />
          ),
        }}
      />
      <Button type="submit" variant="contained" color="success">
        Sign In
      </Button>
    </form>
  );
};
