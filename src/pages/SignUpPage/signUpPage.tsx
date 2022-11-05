import React, { useState } from 'react';
import '../../styles/container.scss';
import { SignUpForm } from '../../components/SignUpForm';
import { SignInLink } from '../../components/SignInLink/signInLink';
import { FormHeader } from '../../components/FormHeader';

export const SignUpPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="container">
      <FormHeader title={'Sign Up'} />
      <SignUpForm
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <SignInLink />
    </div>
  );
};
