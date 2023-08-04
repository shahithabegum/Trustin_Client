import axios from 'axios'
import {BASE_API_URL} from '../config/index'

const getAll_user = ()=>{
   return axios.get(BASE_API_URL+'/getuser')
}

const get_user = (id)=>{
   return axios.get(BASE_API_URL+`/getbyid/${id}`)
}
const update_user = (data)=>{
   return axios.put(BASE_API_URL+`/update`,data)
}
const change_Password = (data)=>{
   return axios.patch(BASE_API_URL+`/changepassword`,data)
}
export{
    getAll_user, get_user,update_user,change_Password
}