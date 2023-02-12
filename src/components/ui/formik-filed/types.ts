import { FormikErrors, FormikValues, FormikTouched } from 'formik';

export interface FormikFieldProps {
  type: string;
  label: string;
  name: string;
  className?: string;
  errors: FormikErrors<FormikValues>;
  touched: FormikTouched<FormikValues>;
}
