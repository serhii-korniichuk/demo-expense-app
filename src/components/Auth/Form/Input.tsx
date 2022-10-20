import classNames from 'classnames';
import { useState } from 'react';

interface Props {
  label: string,
  loading: boolean,
  needToRegister: boolean,
  errorMessage: string,
  value: string,
  setValue: (v: string) => void,
  placeholder: string,
  isPassword?: boolean
  isUserError?: boolean,
  isPasswordError?: boolean,
  setIsPasswordError?: (v:boolean) => void,
  setIsUserError?: (v:boolean) => void,

}

export const Input: React.FC<Props> = (props) => {
  const { 
    label,
    loading,
    needToRegister,
    errorMessage,
    value,
    setValue,
    placeholder,
    isPassword = false,
    isUserError,
    isPasswordError,
    setIsPasswordError,
    setIsUserError,
  } = props;

  const [isShowPassword, setIsShowPassword] = useState(false);
  
  const inputType = isPassword && !isShowPassword
  ? 'password'
  : 'text'

  return (
    <>
      <label className="incodeForm__field__label">
        {label}
      </label>

      <div
        className={classNames('incodeForm__field__input', {
          'is-loading': {loading},
        })}
      >
        <input
          type={inputType}
          id={label}
          className={classNames('incodeForm__field__input--text', {
            'is-danger': needToRegister && errorMessage,
          })}
          placeholder={placeholder}
          required
          minLength={4}
          disabled={loading}
          value={value}
          onChange={e => {
            setValue(e.target.value);
            if (setIsPasswordError) {
              setIsPasswordError(false);
            }
            if (setIsUserError) {
              setIsUserError(false);
            }
          }}
        />
          
        { isPassword &&
          <button
            type='button'
            className={classNames("incodeForm__field__input--eye", {
              'incodeForm__field__input--eye--on': isShowPassword,
              'incodeForm__field__input--eye--off': !isShowPassword,
            })}
            onClick={() => setIsShowPassword(!isShowPassword)}
          >
          </button>
        }  
      </div>

      { (isUserError || isPasswordError) &&
          <p className="incodeForm__field__error help is-danger">
            {`Not valid ${label.toLowerCase()}.`}
          </p>
        }
      <div className="incodeForm__field__decor" />
    </>
  )
};