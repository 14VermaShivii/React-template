import * as Yup from "yup";
export const loginschema = Yup.object({
    email:Yup.string().min(2).required("Please enter your email"),
    password:Yup.string().min(2).required("Please enter your password")
})