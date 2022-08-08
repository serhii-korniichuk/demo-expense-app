import { Box, FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import React from 'react'
import SubmitButton from './SubmitButton';
import ErrorAlert from '../ErrorAlert';


interface State {
  password: string;
  showPassword: boolean;
  username: string;
  displayName: string;
  email: string;
}

const RegisterForm: React.FC = () => {
  const [values, setValues] = React.useState<State>({
    password: '',
    username: '',
    displayName: '',
    email: '',
    showPassword: false,
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const validationPasswordLenght = (): boolean => {
    return !!values.password && values.password.length <= 7;
  }

  const validationEmail = (): boolean => {
    const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return values.email && !regExp.test(values.email) ? true : false
  }

  return (
    <Box component="form" >
      <TextField
        value={values.displayName}
        onChange={handleChange('displayName')}
        required
        fullWidth
        placeholder="John Brun"
        variant="standard"
        id="displayName"
        label="Display Name"
        name="displayName"
        autoFocus
        sx={{
          marginBottom: '22px',
          input: {
            color: "white",
          },
          label: {
            color: "white",
          },
        }}
      />
      <TextField
        value={values.username}
        onChange={handleChange('username')}
        required
        fullWidth
        placeholder="John15"
        variant="standard"
        id="username"
        label="User Name"
        name="username"
        autoFocus
        sx={{
          marginBottom: '22px',
          input: {
            color: "white",
          },
          label: {
            color: "white",
          },
        }}
      />
      <TextField
        value={values.email}
        error={validationEmail()}
        helperText={validationEmail() ? "Please, enter correct email" : "."}
        onChange={handleChange('email')}
        required
        fullWidth
        placeholder="John152@gmail.com"
        variant="standard"
        id="email"
        label="Email Adress"
        name="email"
        autoFocus
        sx={{
          input: {
            color: "white",
          },
          label: {
            color: "white",
          },
        }}
      />
      <FormControl  fullWidth required variant="standard" sx={{
        color: 'white'
      }} >
        <InputLabel sx={{
          color: 'white'
        }} htmlFor="standart-adornment-password">Password</InputLabel>
        <Input
          sx={{
            color: 'white'
          }}
          placeholder="sercret437"
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                sx={{
                  color: 'white'
                }}
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        {validationPasswordLenght() ? <FormHelperText error id="password-error">{"Password should be at least 8 characters"}</FormHelperText> : <FormHelperText >{"."}</FormHelperText>}
      </FormControl>
      <SubmitButton userData={values}>Sign Up</SubmitButton>
      <ErrorAlert></ErrorAlert>
    </Box>
  )
}

export default RegisterForm