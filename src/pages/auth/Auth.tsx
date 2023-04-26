import { Login } from "../../components/login";
import { Register } from "../../components/register";
import logo from "../../images/Logo.svg";

export const Auth: React.FC = () => {
  return (
    <div className="formbox">
      <img src={logo} className="logo" alt="logo" />
      <Login />
      <Register />
    </div>
  );
};
