import * as Yup from 'yup'

const _inputPass = Yup.string()
  .matches(/(?=.*[0-9])(?=.*[a-zA-Z])^.*/, 'Password must contain at least 2 letters and 2 numbers')
  .required('Password is required')
  .min(6, 'Minimum of 6 characters are required')

const _displayName = Yup.string()
  .test('displayName', 'Numbers are not allowed', (value) => {
    if (value) {
      return !value.match(/\d+/g)
    }
    return true
  })
  .min(2, 'Display name is too short. At least 2 characters are required')
  .required('Display name is required')

const _username = Yup.string()
  .required('Please, enter username')
  .min(2, 'Username is too short. At least 2 characters are required')

export const CHANGE_SING_UP_SCHEMA = Yup.object({
  displayName: _displayName,
  username: _username,
  password: _inputPass,
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Passwords don't match")
})

export const CHANGE_SING_IN_SCHEMA = Yup.object({
  username: _username,
  password: _inputPass
})
