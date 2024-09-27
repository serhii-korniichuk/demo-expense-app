import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '../../../components/button';
import { Input } from '../../../components/input';
import { InputPassword } from '../../../components/input-password';
import { Text } from '../../../components/text';
import { authRegister } from '../../../core/auth/auth.slice';
import { AppDispatch } from '../../../core/store';
import { RegisterSchema } from './register.schema';

export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      fullName: '',
      confirmPassword: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: ({ username, password, fullName }) => {
      dispatch(authRegister({ username, password, displayName: fullName }));
      navigate('/auth/login');
    },
  });

  return (
    <LoginRoot>
      <Text weight='bold' size='big' uppercase>
        Sign Up
      </Text>

      <Form onSubmit={formik.handleSubmit}>
        <Input
          id='fullName'
          placeholder='Example123'
          label='User Name'
          onChange={formik.handleChange}
          value={formik.values.fullName}
          helperText={formik.errors.fullName}
          error={Boolean(formik.errors.fullName && formik.touched.fullName)}
        />

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

        <InputPassword
          id='confirmPassword'
          label='Confirm Password'
          placeholder='**********'
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          helperText={formik.errors.confirmPassword}
          error={Boolean(formik.errors.confirmPassword && formik.touched.confirmPassword)}
        />

        <Button type='submit'>Sign In</Button>

        <LinkWrapper>
          <Text size='small'>
            I have an account. <Link to='/auth/login'>Go to Sign in</Link>
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
