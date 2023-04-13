import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[a-zA-Z -']+$/, "Incorrect format")
    .required("Required"),
  userName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(8, "Must be at least 8 symbols!")
    .required("Required"),
  confirmPassword: Yup.string()
    .min(8, "Must be at least 8 symbols!")
    .required("Required"),
});

export const SigninSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(8, "Must be at least 8 symbols!")
    .required("Required"),
});
