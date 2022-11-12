import FooterTitle from "../../UI/FooterTitle";

import FormsWrapper from "../../UI/FormsWrapper";
import FormTitle from "../../UI/FormTitle";

import LoginFields from "./components/LoginFields";

const Login = () => (
  <FormsWrapper size="small">
    <FormTitle>{"SIGN IN"}</FormTitle>
    <LoginFields />
    <footer>
      <FooterTitle
        footerTitle="Don't have account yet?"
        link="/register"
        linkTitle="New account"
      />
    </footer>
  </FormsWrapper>
);

export default Login;
