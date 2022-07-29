import * as Yup from "yup";

// eslint-disable-next-line no-control-regex
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
const usernameRegex = /^[a-z0-9_-]{1,24}$/;

export const SignInSchema = Yup.object().shape({
  username: Yup
    .string()
    .matches(usernameRegex, "Invalid username")
    .min(2, "Too short!")
    .max(60, "Too long!")
    .required("User name is required"),
  password: Yup
    .string()
    .matches(
      passwordRegex,
      `Password should be at least 8 characters,
      must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number.
      Can contain special characters`,
    )
    .min(8, "Too short!")
    .max(40, "Too long!")
    .required("Password is required"),
});

export const SignUpSchema = SignInSchema.concat(Yup.object().shape({
  fullname: Yup
    .string()
    .min(1, "Too short!")
    .max(40, "Too long!")
    .required("Full name is required"),
}));
