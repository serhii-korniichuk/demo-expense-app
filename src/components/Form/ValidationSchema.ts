import * as Yup from "yup";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

export const SignInSchema = Yup.object().shape({
  username: Yup
    .string()
    .min(2, "Too short!")
    .max(60, "Too long!")
    .required("User name is required"),
  password: Yup
    .string()
    .matches(
      passwordRegex,
      `Must contain uppercase/lowercase letters and digits.
      Can contain special characters`,
    )
    .min(8, "Password should be at least 8 characters")
    .max(40, "Too long!")
    .required("Password is required"),
});

export const SignUpSchema = SignInSchema.concat(Yup.object().shape({
  displayName: Yup
    .string()
    .min(1, "Too short!")
    .max(40, "Too long!")
    .required("Full name is required"),
}));
