import { FC, HTMLInputTypeAttribute, useState, useCallback } from 'react';
import { Field, ErrorMessage, useField } from 'formik';
import clsx from 'clsx';

import { TextField, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { FormikFieldProps } from './types';

import styles from './formik-field.module.scss';

export const FormikField: FC<FormikFieldProps> = ({
  type,
  name,
  label,
  errors,
  touched,
  className = '',
}) => {
  const [field] = useField(name);

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleClickShowPassword = useCallback(() => {
    setIsShowPassword((prevIsShowPassword) => !prevIsShowPassword);
  }, []);

  const helperText = useCallback(() => {
    if (errors[name] && touched[name]) {
      return <ErrorMessage name={name} />;
    }

    return null;
  }, [errors, touched]);

  const handleFieldType = (): HTMLInputTypeAttribute => {
    if (type === 'password') {
      return isShowPassword ? 'text' : 'password';
    }

    return type;
  };

  return (
    <div className={clsx(type === 'password' && styles.wrapperPassword)}>
      <Field
        as={TextField}
        variant="standard"
        value={field.value}
        type={handleFieldType()}
        name={name}
        label={label}
        fullWidth
        autoComplete="off"
        helperText={helperText()}
        error={errors[name] && touched[name]}
        className={className}
      />
      {type === 'password' && (
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          className={styles.showIcon}
        >
          {isShowPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      )}
    </div>
  );
};
