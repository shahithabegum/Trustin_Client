import axios from 'axios'
import {BASE_API_URL} from '../config/index'

const login= (data)=>{
    return  axios.post(BASE_API_URL+"/login",data)
}
const signup= (data)=>{
    return  axios.post(BASE_API_URL+"/signup",data)
}
const forget_Password=  (data)=>{
    return  axios.post(BASE_API_URL+"/forgotpassword",data)
}
const reset_password =  (data)=>{
    return  axios.put(BASE_API_URL+"/resetpassword",data)
}

export {
    login,reset_password,forget_Password,signup
}