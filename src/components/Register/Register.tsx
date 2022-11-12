import FooterTitle from "../../UI/FooterTitle";

import FormsWrapper from "../../UI/FormsWrapper";
import FormTitle from "../../UI/FormTitle";
import RegisterFields from "./components/RegisterFields";

const Register = () => (
  <FormsWrapper size="small">
    <FormTitle>{"SIGN UP"}</FormTitle>
    <RegisterFields />
    <footer>
      <FooterTitle
        footerTitle="I have an account"
        link="/"
        linkTitle="Go to Sign in"
      />
    </footer>
  </FormsWrapper>
);

export default Register;
