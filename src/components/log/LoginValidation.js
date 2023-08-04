import * as yup from 'yup'
const LoginValidation = yup.object().shape({
    email:yup.string().required("Username is required"),
    password:yup.string().required("Password is required")
})
export default LoginValidation;