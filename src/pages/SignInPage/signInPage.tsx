import React, { useState } from 'react';
import '../../styles/container.scss';
import { SingInForm } from '../../components/SignInForm';
import { SignUpLink } from '../../components/SignUpLink';
import { FormHeader } from '../../components/FormHeader';
import 'react-toastify/dist/ReactToastify.css';

export const SignInPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="container">
      <FormHeader title={'Sign In'} />
      <SingInForm
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <SignUpLink />
    </div>
  );
};
