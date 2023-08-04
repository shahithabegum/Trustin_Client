import * as yup from 'yup'
const CompanyValidation = yup.object().shape({
    useremail:yup.string().required("Email is required"),
    companyname:yup.string().required("Company Name is required"),
    companywebsite:yup.string().required("Company Website is required"),
    companylocation:yup.string().max(250,"max lenth 250").required("Company Location is required"),
  
})
export default CompanyValidation;