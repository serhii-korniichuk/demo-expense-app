import React from 'react';
import {useField} from "formik";
import css from './input.module.scss';

const CustomInput = ({label, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <div className={css.customInput}>
      <label htmlFor={props.id}>{label}</label>
      <input {...props} {...field}/>
      {meta.touched && meta.error
        ? <div className={css.error}>{meta.error}</div>
        : null
      }
    </div>
  );
};

export default CustomInput;