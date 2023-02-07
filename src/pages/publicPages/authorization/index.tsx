import React, { useCallback, useState } from 'react'

import { Box, Typography } from '@mui/material'

import Header from 'src/components/header'

import Login from './login'
import Register from './register'

import { useStyles } from './style'

const Authorization: React.FC = () => {
  const [authType, setAuthType] = useState<'singIn' | 'singUp'>('singIn')

  const classes = useStyles()

  const getContent = useCallback(() => {
    const signInForm = {
      title: 'Sign In',
      text: 'Don’t have account yet?',
      link: (
        <Typography variant='info4'>
          Don’t have account yet? <span onClick={() => setAuthType('singUp')}>New Account</span>
        </Typography>
      ),
      form: <Login />
    }
    const signUpForm = {
      title: 'Sign Up',
      link: (
        <Typography variant='info4'>
          I have an account. <span onClick={() => setAuthType('singIn')}>Go to Sign in</span>
        </Typography>
      ),
      form: <Register callBack={setAuthType} />
    }
    return authType === 'singIn' ? signInForm : signUpForm
  }, [authType])

  const { title, link, form } = getContent()

  return (
    <Box className={classes.root}>
      <Header />
      <Typography variant='h1' sx={{ marginTop: '72px', textTransform: 'uppercase' }}>
        {title}
      </Typography>
      <Box className={classes.formContainer}>{form}</Box>
      <Box className={classes.linkContainer}>{link}</Box>
    </Box>
  )
}

export default Authorization
