import axios from 'axios'
import {BASE_API_URL} from '../config/index'

const generateNotification = (data)=>{
    return axios.post(BASE_API_URL+'/notification',data)
}
const getNotification = (useremail)=>{
    return axios.get(BASE_API_URL+`/getnotify/${useremail}`)
}
const read = (_id)=>{
    return axios.put(BASE_API_URL+`/read/${_id}`)
}
const rejectNotify = (_id)=>{
    return axios.delete(BASE_API_URL+`/delete/${_id}`)
}
export{
    generateNotification,
    getNotification,
    read,
    rejectNotify
}