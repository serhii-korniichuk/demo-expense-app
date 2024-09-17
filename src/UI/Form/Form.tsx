import React from "react";
import FormButton from "../FormButton";
import FormErrorTitle from "../FormErrorTitle";

import s from "./Form.module.scss";

interface FormProps {
  children: React.ReactNode;
  onSumbit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  buttonTitle: string;
  isShowErrorMessage?: boolean | null;
  errorMessage?: string;
}

const Form = ({
  children,
  onSumbit,
  buttonTitle,
  isShowErrorMessage,
  errorMessage,
}: FormProps) => (
  <form onSubmit={onSumbit} className={s.FormWrapper}>
    {children}
    <FormButton title={buttonTitle} />
    {isShowErrorMessage && <FormErrorTitle>{errorMessage}</FormErrorTitle>}
  </form>
);

export default Form;
