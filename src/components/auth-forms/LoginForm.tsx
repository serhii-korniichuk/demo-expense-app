import { useState } from 'react';
import { TokenPair } from '../../interfaces/User.interface';
import { login } from '../../services/auth.service';
import {
  Button,
  FormTitle,
  Input,
  Footer,
  FooterText,
  FooterLink,
  AuthForm,
  ErrorMessage,
} from './GeneralComponents';

interface Props {
  onModeChange: () => void;
  setTokens: (tokens: TokenPair | null) => void;
}

export default function LoginForm({
  onModeChange,
  setTokens,
}: Props): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    setError(null);
    try {
      const tokens = await login({ username, password });
      setTokens(tokens);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <>
      <AuthForm onSubmit={handleSubmit}>
        <FormTitle>Sign In</FormTitle>
        <Input
          label="User Name"
          placeholder="Example1488"
          value={username}
          onChange={setUsername}
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
        <Button type="submit">Sign in</Button>
      </AuthForm>
      <Footer>
        <FooterText>Don't have account yet?</FooterText>
        <FooterLink onClick={onModeChange}>New Account</FooterLink>
      </Footer>
    </>
  );
}
