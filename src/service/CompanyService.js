import axios from 'axios'
import {BASE_API_URL} from '../config/index'

const create_company = (data)=>{
   return axios.post(BASE_API_URL+'/create',data)
}
const getAll_company = ()=>{
    return axios.get(BASE_API_URL+'/get')
 }
 const getbyuser_company = (id)=>{
    return axios.get(BASE_API_URL+`/getbyuser/${id}`)
 }
 const connect_company = (useremail,data)=>{
   return axios.put(BASE_API_URL+`/network/${useremail}`,data)
}
const update_company = (id,data)=>{
   return axios.put(BASE_API_URL+`/update/${id}`,data)
}
 const upload = (data)=>{
   return axios.post(BASE_API_URL+`/upload`,data)
}
export{
    create_company,getAll_company,getbyuser_company,upload,connect_company,update_company
}