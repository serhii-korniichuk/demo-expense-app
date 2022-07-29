import * as Yup from "yup";

// eslint-disable-next-line no-control-regex
const mailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
const phoneRegex = /^[+]{0,1}380([0-9]{9})$/;

export const SignUpSchema = Yup.object().shape({
  name: Yup
    .string()
    .min(2, "Too short!")
    .max(60, "Too long!")
    .required("Name is required"),
  email: Yup
    .string()
    .matches(mailRegex, "Invalid email")
    .min(2, "Too short!")
    .max(100, "Too long!")
    .required("Mail is required"),
  phone: Yup
    .string()
    .matches(phoneRegex, "Invalid phone")
    .required("Phone is required"),
  position_id: Yup
    .number()
    .required("Please, choose a position"),
});
