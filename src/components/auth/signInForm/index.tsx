import { useState } from "react";
import { handleLogin } from "../../../api";
import Btn from "../../unknown/btn";
import Input from "../input";

import styles from "./styles.module.scss";

const SignInForm = () => {
  const [username, setUsername] = useState<string>(``);
  const [password, setPassword] = useState<string>(``);
  const [error, setError] = useState<string>(``);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleLogin({ username: ``, password: `` }).then((res) =>
      setError(res as string)
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      {error.length !== 0 && <span className={styles.error}>{error}</span>}
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
      <Btn
        type="submit"
        label="Sign In"
        isDisabled={password.length === 0 || username.length === 0}
      />
    </form>
  );
};

export default SignInForm;
