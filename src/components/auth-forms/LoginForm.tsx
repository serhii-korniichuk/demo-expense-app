import { useState } from 'react';
import {
  Button,
  FormTitle,
  Input,
  Footer,
  FooterText,
  FooterLink,
  AuthForm,
} from './GeneralComponents';

interface Props {
  onModeChange: () => void;
}

export default function LoginForm({ onModeChange }: Props): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <AuthForm>
        <FormTitle>Sign In</FormTitle>
        <Input
          label="Email Address"
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={setEmail}
        />
        <Input
          label="Password"
          type="password"
          placeholder="***************"
          value={password}
          onChange={setPassword}
          autoComplete="new-password"
        />
        <Button>Sign in</Button>
      </AuthForm>
      <Footer>
        <FooterText>Don't have account yet?</FooterText>
        <FooterLink onClick={onModeChange}>New Account</FooterLink>
      </Footer>
    </>
  );
}
