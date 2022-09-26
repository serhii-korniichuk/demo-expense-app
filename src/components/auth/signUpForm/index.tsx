import { useEffect, useState } from "react";
import { handleRegister } from "../../../api";
import Btn from "../../unknown/btn";
import Input from "../input";

import styles from "../signInForm/styles.module.scss";

const SignUpForm = ({ onRegister }: { onRegister: Function }) => {
  const [fullName, setFullName] = useState<string>(``);
  const [username, setUsername] = useState<string>(``);
  const [password, setPassword] = useState<string>(``);
  const [confirmPassword, setConfirmPassword] = useState<string>(``);
  const [error, setError] = useState<string>(``);
  const [successReg, setSuccessReg] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleRegister({ displayName: fullName, username, password })
      .then((res) => {
        if (res) {
          setSuccessReg(true);
        }
      })
      .catch((err) => setError(err.message));
  };

  useEffect(() => {
    if (successReg) {
      let timeout = setTimeout(() => onRegister(), 2000);
      return () => clearTimeout(timeout);
    }
  }, [successReg, onRegister]);

  return (
    <form onSubmit={handleSubmit}>
      {error.length !== 0 && <span className={styles.error}>{error}</span>}
      {successReg && (
        <span className={styles.success}>
          Registered. Redirecting to sign in form
        </span>
      )}
      <Input
        id="fullname"
        label="Full Name"
        placeholder="Example Name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFullName(e.target.value)
        }
        value={fullName}
      />
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
      <Input
        id="confirmPassword"
        label="Confirm Password"
        placeholder="***************"
        passwordVariant
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setConfirmPassword(e.target.value)
        }
        value={confirmPassword}
      />
      <Btn
        type="submit"
        label="Sign Up"
        isDisabled={
          fullName.length === 0 ||
          username.length === 0 ||
          password.length === 0 ||
          confirmPassword.length === 0 ||
          password !== confirmPassword
        }
      />
    </form>
  );
};

export default SignUpForm;
