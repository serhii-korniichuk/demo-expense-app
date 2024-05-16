import { useState } from 'react';
import { TokenPair } from '../../interfaces/User.interface';
import { login, register } from '../../services/auth.service';
import {
  Button,
  FormTitle,
  AuthForm,
  Input,
  Footer,
  FooterLink,
  FooterText,
  ErrorMessage,
} from './GeneralComponents';

interface Props {
  onModeChange: () => void;
  setTokens: (tokens: TokenPair | null) => void;
}

export default function RegisterForm({
  onModeChange,
  setTokens,
}: Props): JSX.Element {
  const [displayName, setDisplayName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    setError(null);

    try {
      await register({ displayName, username, password });
      const tokens = await login({ username, password });
      setTokens(tokens);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <>
      <AuthForm onSubmit={handleSubmit}>
        <FormTitle>Sign Up</FormTitle>
        <Input
          label="Full Name"
          placeholder="Example Name"
          value={displayName}
          onChange={setDisplayName}
        />
        <Input
          label="User Name"
          placeholder="Example1488"
          value={username}
          onChange={setUsername}
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
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        <Button type="submit">Sign Up</Button>
      </AuthForm>
      <Footer>
        <FooterText>I have an account.</FooterText>
        <FooterLink onClick={onModeChange}>Go to Sign in</FooterLink>
      </Footer>
    </>
  );
}
