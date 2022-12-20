import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '../../../components/button';
import { Input } from '../../../components/input';
import { InputPassword } from '../../../components/input-password';
import { Text } from '../../../components/text';
import { authLogin } from '../../../core/auth/auth.slice';
import { AppDispatch } from '../../../core/store';
import { getUser } from '../../../core/user/user.slice';
import { LoginSchema } from './login-schema';

export const Login = () => {
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      await dispatch(authLogin(values));
      await dispatch(getUser());
    },
  });

  return (
    <LoginRoot>
      <Text weight='bold' size='big' uppercase>
        Sign In
      </Text>

      <Form onSubmit={formik.handleSubmit}>
        <Input
          id='username'
          placeholder='Example123'
          label='User Name'
          onChange={formik.handleChange}
          value={formik.values.username}
          helperText={formik.errors.username}
          error={Boolean(formik.errors.username && formik.touched.username)}
        />
        <InputPassword
          id='password'
          label='Password'
          placeholder='**********'
          onChange={formik.handleChange}
          value={formik.values.password}
          helperText={formik.errors.password}
          error={Boolean(formik.errors.password && formik.touched.password)}
        />

        <Button type='submit'>Sign In</Button>

        <LinkWrapper>
          <Text size='small'>
            Don’t have account yet? <Link to='/auth/register'> New Account</Link>
          </Text>
        </LinkWrapper>
      </Form>
    </LoginRoot>
  );
};

const LoginRoot = styled.div`
  button {
    width: 100%;
  }
`;

const Form = styled.form`
  margin-top: 48px;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
