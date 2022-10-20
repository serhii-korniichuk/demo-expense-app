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
  isUsernameBusy?: boolean,
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
    isUsernameBusy,
  } = props;

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isValidUsername, setIsValidUsername] = useState(true);
  
  const inputType = isPassword && !isShowPassword
  ? 'password'
  : 'text'

  const handleIsValidUsername = () => {
    if (label === 'User Name') {
      return setIsValidUsername(!value.includes(' '));
    }
  }

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
          onBlur={handleIsValidUsername}
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

      { (isUserError 
        || isPasswordError 
        || !isValidUsername 
        || isUsernameBusy) && 
          <p className="incodeForm__field__error help is-danger">
            {
              !isValidUsername
              ? `Try username without space :)`
              : isUsernameBusy
                ? `Someone is already useing this username :(`
                :`Not valid ${label.toLowerCase()}.`
            }
          </p>
        }
      <div className="incodeForm__field__decor" />
    </>
  )
};