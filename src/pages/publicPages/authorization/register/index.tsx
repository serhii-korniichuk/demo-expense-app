import React, { BaseSyntheticEvent } from 'react'

import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Formik, FormikProps, FormikValues } from 'formik'

import { CustomButton } from 'src/components/customButton'
import { SimpleInput } from 'src/components/customInput'

import { authRegister } from 'src/redux/auth/actions'

import { useAppDispatch } from 'src/utils/hooks/redux'
import { CHANGE_SING_UP_SCHEMA } from 'src/utils/validation/auth'

interface IProps {
  callBack: (value: 'singIn') => void
}

const Register: React.FC<IProps> = ({ callBack }) => {
  const dispatch = useAppDispatch()

  return (
    <Formik
      initialValues={{
        displayName: '',
        username: '',
        password: '',
        confirmPassword: '',
        showPass: {
          pass: false,
          confirmPass: false
        }
      }}
      onSubmit={(values) => {
        dispatch(
          authRegister({
            data: {
              displayName: values.displayName,
              password: values.password,
              username: values.username
            },
            func: () => callBack('singIn')
          })
        )
      }}
      validationSchema={CHANGE_SING_UP_SCHEMA}
    >
      {(props: FormikProps<FormikValues>) => {
        const handleChange = (e: BaseSyntheticEvent) => {
          const { name, value } = e.currentTarget
          props.setFieldValue(name, value)
        }

        const handleTogglePassword = (type: 'pass' | 'confirmPass') => {
          props.setFieldValue(`showPass.${type}`, !props.values.showPass[type])
        }

        return (
          <form onSubmit={props.handleSubmit}>
            <SimpleInput
              name='displayName'
              label='Full Name'
              type='text'
              value={props.values.displayName}
              onChange={handleChange}
              onBlur={props.handleBlur}
            />

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
              type={props.values.showPass.pass ? 'text' : 'password'}
              value={props.values.password}
              onChange={handleChange}
              onBlur={props.handleBlur}
              onIconClick={() => handleTogglePassword('pass')}
              passwordIcon={props.values.showPass.pass ? <Visibility /> : <VisibilityOff />}
            />

            <SimpleInput
              name='confirmPassword'
              label='Confirm Password '
              type={props.values.showPass.confirmPass ? 'text' : 'password'}
              value={props.values.confirmPassword}
              onChange={handleChange}
              onBlur={props.handleBlur}
              onIconClick={() => handleTogglePassword('confirmPass')}
              passwordIcon={props.values.showPass.confirmPass ? <Visibility /> : <VisibilityOff />}
            />

            <CustomButton
              type='button'
              size='LG'
              onClick={() => props.handleSubmit()}
              text='Sign Up'
            />
          </form>
        )
      }}
    </Formik>
  )
}

export default Register
