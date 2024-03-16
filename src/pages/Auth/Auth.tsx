import { Container, Section } from './Auth.styled';
import { Logo } from '../../components/Logo/Logo';
import { Form } from '../../components/Form/Form';
import React from 'react';

const Auth: React.FC = () => {
  return (
    <Container>
      <Section>
        <Logo />
        <Form />
      </Section>
    </Container>
  );
};

export default Auth;
