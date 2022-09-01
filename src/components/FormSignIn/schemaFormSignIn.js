import * as yup from "yup";

export const schema = yup
    .object({
        userName: yup
            .string()
            .required("Be sure to fill out")
            .min(
                3,
                "The incorrect name of the user should be more than 3 characters",
            ),
        password: yup.string().required("You haven't entered the password"),
    })
    .required();
