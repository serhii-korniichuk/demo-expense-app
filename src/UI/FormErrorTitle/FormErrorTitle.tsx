import s from "./FormErrorTitle.module.scss";

interface FormErrorTitleProps {
  children: React.ReactNode;
}

const FormErrorTitle = ({ children }: FormErrorTitleProps) => (
  <h4 className={s.ErrorTitle}>{children}</h4>
);

export default FormErrorTitle;
