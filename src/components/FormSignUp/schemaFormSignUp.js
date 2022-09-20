import * as yup from "yup";

export const schema = yup
    .object({
        fullName: yup
            .string()
            .required("Full name is required")
            .min(2, "Your Full Name is too short. At least 2 characters"),
        userName: yup
            .string()
            .required("User name is required")
            .min(3, "Your name is too short. At least 3 characters"),
        password: yup
            .string()
            .required("password is required")
            .min(6, "Your password is too short."),
        confirmPassword: yup
            .string()
            .test(
                "passwords-match",
                "Passwords must match.",
                function (value) {
                    return this.parent.password === value;
                },
            ),
    })
    .required();
