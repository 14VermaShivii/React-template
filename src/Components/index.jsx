import * as Yup from "yup";
export const loginschema = Yup.object({
    email:Yup.string().min(2).required("Please enter your email"),
    password:Yup.string().min(2).required("Please enter your password")
})
export const forgotpasswordschema = Yup.object({
    password:Yup.string().min(2).required("Please enter your password"),
    confirmpassword:Yup.string().min(2).required("Please enter your confirmpassword")
})
export const signupschema = Yup.object({
    name:Yup.string().min(2).required("Please enter your name"),
    email:Yup.string().min(2).required("Please enter your email"),
    password:Yup.string().min(2).required("Please enter your password"),
    
})