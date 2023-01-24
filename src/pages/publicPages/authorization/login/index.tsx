import React, { BaseSyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Formik, FormikProps, FormikValues } from 'formik'

import { CustomButton } from 'src/components/customButton'
import { SimpleInput } from 'src/components/customInput'

import { authLogin } from 'src/redux/auth/actions'

import { useAppDispatch } from 'src/utils/hooks/redux'
import { CHANGE_SING_IN_SCHEMA } from 'src/utils/validation/auth'

const Login: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
        showPass: false
      }}
      onSubmit={(values) => {
        dispatch(
          authLogin({
            data: { password: values.password, username: values.username },
            func: () => navigate('/home')
          })
        )
      }}
      validationSchema={CHANGE_SING_IN_SCHEMA}
    >
      {(props: FormikProps<FormikValues>) => {
        const handleChange = (e: BaseSyntheticEvent) => {
          const { name, value } = e.currentTarget
          props.setFieldValue(name, value)
        }

        const handleTogglePassword = () => props.setFieldValue('showPass', !props.values.showPass)

        return (
          <form onSubmit={props.handleSubmit}>
            <SimpleInput
              name='username'
              label='User Name'
              type='text'
              value={props.values.username}
              onChange={handleChange}
              onBlur={props.handleBlur}
            />

            <SimpleInput
              name='password'
              label='Password'
              type={props.values.showPass ? 'text' : 'password'}
              value={props.values.password}
              onChange={handleChange}
              onBlur={props.handleBlur}
              onIconClick={handleTogglePassword}
              passwordIcon={props.values.showPass ? <Visibility /> : <VisibilityOff />}
            />

            <CustomButton
              type='button'
              size='LG'
              onClick={() => props.handleSubmit()}
              text='Sign In'
            />
          </form>
        )
      }}
    </Formik>
  )
}

export default Login
