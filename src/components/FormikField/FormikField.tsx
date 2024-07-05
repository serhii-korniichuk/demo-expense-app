import React from "react";
import TextField from "@mui/material/TextField";
import {
  Field,
  ErrorMessage,
  FormikErrors,
  FormikValues,
  FormikTouched,
  useField,
} from "formik";

interface FormikFieldProps {
  type: string,
  label: string,
  name: string,
  className: string,
  errors: FormikErrors<FormikValues>,
  touched: FormikTouched<FormikValues>,
}

export const FormikField: React.FC<FormikFieldProps> = ({
  type,
  label,
  name,
  className,
  errors,
  touched,
}) => {
  const [field] = useField(name);

  const helperText = () => {
    if (errors[name] && touched[name]) {
      return <ErrorMessage name={name} />;
    }

    return " ";
  };

  return (
    <Field
      as={TextField}
      variant="standard"
      value={field.value}
      type={type}
      name={name}
      label={label}
      fullWidth
      autoComplete="off"
      helperText={helperText()}
      error={errors[name] && touched[name]}
      className={className}
    />
  );
};
