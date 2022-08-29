import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import shortid from 'shortid';
import { useRegisterUserMutation } from 'redux/auth/auth-reducer';
import Button from 'components/Button/Button';
import InputForm from 'components/InputForm';

const validateSchema = Yup.object().shape({
  displayName: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Full name is invalid',
    )
    .min(2, 'Too Short!')
    .required('Full name is required'),
  username: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, 'Name is invalid')
    .min(2, 'Too Short!')
    .required('Username is required'),
  password: Yup.string()
    .min(8, 'Must contain at least 8 characters')
    .max(15, 'Must be no more than 15 characters!')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

export default function SignUp({ onClick }) {
  const [register] = useRegisterUserMutation();

  const navigate = useNavigate();

  return (
    <>
      <Title>Sign Up</Title>
      <Formik
        initialValues={{
          displayName: '',
          username: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validateSchema}
        onSubmit={(values, onSubmitProps) => {
          if (values.confirmPassword) {
            delete values.confirmPassword;
          }
          register(values);
          onSubmitProps.resetForm();
          navigate('/');
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <InputForm
                label="Full Name"
                name="displayName"
                type="text"
                placeholder="Example Name"
                id={shortid.generate()}
              >
                {errors.displayName && touched.displayName ? (
                  <ErrorMessage>{errors.displayName}</ErrorMessage>
                ) : null}
              </InputForm>
              <InputForm
                label="User Name"
                name="username"
                type="text"
                placeholder="Example123"
                title="Only letters and numbers"
                id={shortid.generate()}
              >
                {errors.username && touched.username ? (
                  <ErrorMessage>{errors.username}</ErrorMessage>
                ) : null}
              </InputForm>
              <InputForm
                label="Password"
                name="password"
                placeholder="***************"
                isPassword
                id={shortid.generate()}
              >
                {errors.password && touched.password ? (
                  <ErrorMessage>{errors.password}</ErrorMessage>
                ) : null}
              </InputForm>
              <InputForm
                label="Confirm Password "
                name="confirmPassword"
                placeholder="***************"
                isPassword
                id={shortid.generate()}
              >
                {errors.confirmPassword && touched.confirmPassword ? (
                  <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
                ) : null}
              </InputForm>
            </div>
            <ButtonWrap>
              <Button type="submit" width="100%">
                Sign Up
              </Button>
            </ButtonWrap>
          </Form>
        )}
      </Formik>

      <Text>
        I have an account. <span onClick={onClick}>Go to Sign in</span>
      </Text>
    </>
  );
}

const Title = styled.h1`
  font-weight: 700;
  font-size: 56px;
  line-height: 1.5;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: 72px;
  margin-bottom: 48px;
`;

const ErrorMessage = styled.div`
  position: absolute;
  bottom: -20px;
  font-size: 14px;
  color: red;
`;

const ButtonWrap = styled.div`
  margin-top: 32px;
  margin-bottom: 24px;
`;

const Text = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.55;
  color: rgba(241, 242, 241, 1);

  span {
    color: rgba(127, 170, 240, 1);
  }
`;
