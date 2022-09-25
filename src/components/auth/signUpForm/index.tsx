import { useState } from "react";
import Btn from "../../unknown/btn";
import Input from "../input";

const SignUpForm = () => {
  const [fullName, setFullName] = useState<string>(``);
  const [username, setUsername] = useState<string>(``);
  const [password, setPassword] = useState<string>(``);
  const [confirmPassword, setConfirmPassword] = useState<string>(``);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username);
  };

  return (
    <form onSubmit={handleSubmit}>
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
