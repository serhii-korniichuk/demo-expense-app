import s from "./FormTitle.module.scss";

interface FormTitle {
  children: React.ReactNode;
}

const FormTitle = ({ children }: FormTitle) => <h1 className={s.FormTitle}>{children}</h1>;

export default FormTitle;
