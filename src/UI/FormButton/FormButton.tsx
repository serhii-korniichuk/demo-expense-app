import s from "./FormButton.module.scss";

interface FormButtonProps {
  title: string;
  onClick?: () => void;
}

const FormButton = ({ title, onClick }: FormButtonProps) => (
  <button onClick={onClick} className={s.ButtonWrapper}>
    {title}
  </button>
);

export default FormButton;
