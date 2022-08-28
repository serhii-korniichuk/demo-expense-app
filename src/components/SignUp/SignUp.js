import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { useRegisterUserMutation } from 'redux/auth/auth-reducer';
import Button from 'components/Button/Button';
import Icon from 'components/Icon';

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
  const [showPassword, setShowPassword] = useState(false);
  const [register] = useRegisterUserMutation();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
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
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <FieldWrap>
                <label>Full Name</label>
                <Field
                  className="field"
                  name="displayName"
                  type="text"
                  placeholder="Example Name"
                />
                {errors.displayName && touched.displayName ? (
                  <ErrorMessage>{errors.displayName}</ErrorMessage>
                ) : null}
              </FieldWrap>
              <FieldWrap>
                <label>User Name</label>
                <Field
                  className="field"
                  name="username"
                  type="text"
                  placeholder="Example123"
                  title="Only letters and numbers"
                />
                {errors.username && touched.username ? (
                  <ErrorMessage>{errors.username}</ErrorMessage>
                ) : null}
              </FieldWrap>
              <FieldWrap>
                <label>Password</label>
                <Field
                  className="field"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="***************"
                />
                <Icon
                  className="icon"
                  width="24px"
                  height="24px"
                  fill="#fff"
                  iconName={showPassword ? 'icon-eye-on' : 'icon-eye-off'}
                  onClick={handleClickShowPassword}
                />
                {errors.password && touched.password ? (
                  <ErrorMessage>{errors.password}</ErrorMessage>
                ) : null}
              </FieldWrap>
              <FieldWrap>
                <label>Confirm Password </label>
                <Field
                  className="field"
                  name="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="***************"
                />
                <Icon
                  className="icon"
                  width="24px"
                  height="24px"
                  fill="#fff"
                  iconName={showPassword ? 'icon-eye-on' : 'icon-eye-off'}
                  onClick={handleClickShowPassword}
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
                ) : null}
              </FieldWrap>
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

const FieldWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  line-height: 1.55;
  &::before {
    position: absolute;
    content: '';
    height: 1px;
    width: 100%;
    background: #fff;
    bottom: 0;
  }

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  label {
    font-size: 14px;
    margin-bottom: 5.5px;
  }

  .field {
    margin-bottom: 7px;
    padding: 0;
    font-size: 16px;
    line-height: 1.55;
    opacity: 0.7;
    background: transparent;
    border: none;
    color: #fff;
  }

  .icon {
    position: absolute;
    bottom: 0px;
    right: 0px;
  }
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
