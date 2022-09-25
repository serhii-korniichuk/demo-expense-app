import { useState } from "react";
import ActionBtn from "../actionBtn";
import Input from "../input";

const SignInForm = () => {
  const [username, setUsername] = useState<string>(``);
  const [password, setPassword] = useState<string>(``);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="username"
        label="User Name"
        placeholder="Example123"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
        value={username}
      />
      <Input
        id="password"
        label="Password"
        placeholder="***************"
        passwordVariant
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        value={password}
      />
      <ActionBtn
        label="Sign In"
        isDisabled={password.length === 0 || username.length === 0}
      />
    </form>
  );
};

export default SignInForm;
