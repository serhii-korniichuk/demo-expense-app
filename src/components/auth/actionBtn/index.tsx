import styles from "./styles.module.scss";

const ActionBtn = ({
  label,
  isDisabled,
}: {
  label: string;
  isDisabled: boolean;
}) => {
  return (
    <button disabled={isDisabled} type="submit" className={styles.btn}>
      {label}
    </button>
  );
};

export default ActionBtn;
