import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, IconButton, InputAdornment } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import React from 'react';
import { useAction } from '../../../../../hooks';
import { registerNewUser } from '../../../../../model/api/api';
import { setUser } from '../../../../../model/reducer/user/reducer';
import { StyledInput } from '../../../../../shared/components';
import classes from '../form.module.scss';

const validationSchema = yup.object({
  username: yup
    .string()
    .min(2, 'User Name should be of minimum 2 characters length')
    .required('User Name is required'),
  displayName: yup
    .string()
    .min(2, 'Full Name should be of minimum 2 characters length')
    .required('Full Name is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const SignUpForm = (): JSX.Element => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [boundedSetUser] = useAction([setUser]);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      displayName: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: ({ displayName, password, username }) => {
      registerNewUser({ displayName, password, username })
        .then(({ data }) => {
          boundedSetUser(data);
        })
        .then(() => {
          formik.values.displayName = '';
          formik.values.password = '';
          formik.values.username = '';
          formik.values.confirmPassword = '';
        })
        .then(() => {
          navigate('/');
        })
        .catch((error) => {
          console.error(error.response.data.message);
        });
    },
  });

  const handleClickShowPassword = (): void => {
    setShowPassword((show) => !show);
  };

  const handleClickShowConfirmPassword = (): void => {
    setShowConfirmPassword((show) => !show);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  };

  return (
    <form onSubmit={formik.handleSubmit} className={`${classes.form} ${classes.signUp}`}>
      <StyledInput
        name="displayName"
        label="Full Name"
        placeholder="Example Name"
        type="text"
        variant="standard"
        onChange={formik.handleChange}
        value={formik.values.displayName}
        error={formik.touched.displayName && Boolean(formik.errors.displayName)}
        helperText={formik.touched.displayName && formik.errors.displayName}
      />
      <StyledInput
        name="username"
        label="User Name"
        placeholder="Example123"
        type="text"
        variant="standard"
        onChange={formik.handleChange}
        value={formik.values.username}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
      />
      <StyledInput
        name="password"
        label="Password"
        placeholder="***********"
        variant="standard"
        type={showPassword ? 'text' : 'password'}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        onChange={formik.handleChange}
        value={formik.values.password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword
                  ? (
                  <VisibilityOff sx={{ color: '#FFFFFF' }} />
                    )
                  : (
                  <Visibility sx={{ color: '#FFFFFF' }} />
                    )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <StyledInput
        name="confirmPassword"
        label="Confirm Password"
        placeholder="***********"
        variant="standard"
        type={showConfirmPassword ? 'text' : 'password'}
        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowConfirmPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showConfirmPassword
                  ? (
                  <VisibilityOff sx={{ color: '#FFFFFF' }} />
                    )
                  : (
                  <Visibility sx={{ color: '#FFFFFF' }} />
                    )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button type="submit" variant="contained" color="success">
        Sign Up
      </Button>
    </form>
  );
};
