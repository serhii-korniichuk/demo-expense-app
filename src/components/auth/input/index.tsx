import styles from "./styles.module.scss";

interface InputProps {
  label: string;
  placeholder: string;
  passwordVariant?: Boolean;
  onChange: any;
  value: string;
  id: string;
}

const Input = ({
  id,
  label,
  placeholder,
  passwordVariant,
  onChange,
  value,
}: InputProps) => {
  return (
    <div className={styles.container} key={id}>
      {!passwordVariant ? (
        <>
          <span className={styles.label}>{label}</span>
          <label className={styles.inputContainer} htmlFor={id}>
            <input
              id={id}
              name={id}
              type="text"
              placeholder={placeholder}
              autoComplete="off"
              onChange={onChange}
              value={value}
            />
          </label>
          <div className={styles.border} />
        </>
      ) : (
        <>
          <span className={styles.label}>{label}</span>
          <label className={styles.inputContainer} htmlFor={id}>
            <input
              id={id}
              name={id}
              type="password"
              placeholder={placeholder}
              onChange={onChange}
              value={value}
            />
            <span></span>
          </label>
          <div className={styles.border} />
        </>
      )}
    </div>
  );
};

export default Input;
