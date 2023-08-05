import * as yup from 'yup'
const ChangepasswordValidation = yup.object().shape({
    email:yup.string().required("Email is required"),
    password:yup.string().required("Password is required"),
    confirmpassword:yup.string().required("Confirm Password is required").oneOf([yup.ref('password')],'Password must match')
})
export default ChangepasswordValidation;