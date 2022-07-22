import { useState } from 'react';
import {
  Button,
  FormTitle,
  AuthForm,
  Input,
  Footer,
  FooterLink,
  FooterText,
} from './GeneralComponents';

interface Props {
  onModeChange: () => void;
}

export default function RegisterForm({ onModeChange }: Props): JSX.Element {
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };
  return (
    <>
      <AuthForm onSubmit={handleSubmit}>
        <FormTitle>Sign Up</FormTitle>
        <Input
          label="Full Name"
          placeholder="Example Name"
          value={fullName}
          onChange={setFullName}
        />
        <Input
          label="User Name"
          placeholder="Example1488"
          value={userName}
          onChange={setUserName}
        />
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
        <Button>Sign Up</Button>
      </AuthForm>
      <Footer>
        <FooterText>I have an account.</FooterText>
        <FooterLink onClick={onModeChange}>Go to Sign in</FooterLink>
      </Footer>
    </>
  );
}
