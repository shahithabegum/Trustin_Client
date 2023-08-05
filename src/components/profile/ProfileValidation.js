import * as yup from 'yup'
const ProfileValidation = yup.object().shape({
    email:yup.string().required("Email is required"),
    username:yup.string().required("Username is required"),
    password:yup.string().required("Password is required"),
    phoneno:yup.string().max(10,"max lenth 10").required("Password is required"),
    confirmpassword:yup.string().required("Confirm Password is required").oneOf([yup.ref('password')],'Password must match')
})
export default ProfileValidation;