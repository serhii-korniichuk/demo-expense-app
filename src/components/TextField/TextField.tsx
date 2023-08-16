import { FC, useState } from 'react';
import classes from './TextField.module.scss';
import { EyeIconOff } from '../EyeIcons/EyeIconOff';
import { EyeIconOn } from '../EyeIcons/EyeIconOn';

type Props = {
  value: string;
  onChange: (value: string) => void;
  label: string;
  inputType: string;
  placeholder: string;
  isDisabled: boolean;
};

export const TextField: FC<Props> = (props) => {
  const {
    value,
    onChange,
    label,
    inputType,
    placeholder,
    isDisabled,
  } = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isPassword = inputType === 'password';
  const CurrentInputType = isPassword && !isPasswordVisible ? 'password' : 'text';

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={classes.textField}>
      {label}

      <input
        type={CurrentInputType}
        className={classes.input}
        placeholder={placeholder}
        required
        minLength={4}
        disabled={isDisabled}
        value={value}
        onChange={event => {
          onChange(event.target.value);
        }}
      />

      {isPassword && (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button
          type="button"
          className={classes.eyeIcon}
          onClick={() => setIsPasswordVisible(prev => !prev)}
        >
          {isPasswordVisible ? <EyeIconOff /> : <EyeIconOn />}
        </button>
      )}
    </label>
  );
};
