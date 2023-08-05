import * as yup from 'yup'
const EditprofileValidation = yup.object().shape({
    email:yup.string().required("Email is required"),
    username:yup.string().required("Username is required"),
    phoneno:yup.string().max(10,"max lenth 10").required("Password is required"),
})
export default EditprofileValidation;