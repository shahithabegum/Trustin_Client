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
 const upload = (data)=>{
   return axios.post(BASE_API_URL+`/upload`,data)
}
export{
    create_company,getAll_company,getbyuser_company,upload
}