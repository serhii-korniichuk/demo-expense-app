import classNames from "classnames";
import styles from "./styles.module.scss";

interface BtnProps {
  label: string;
  isDisabled?: boolean;
  type: "submit" | "button";
  onClick?(): void;
  className?: string;
}

const Btn = ({
  label,
  isDisabled,
  type,
  onClick,
  className
}: BtnProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      type={type}
      className={classNames(styles.btn, className)}
    >
      {label}
    </button>
  );
};

export default Btn;
