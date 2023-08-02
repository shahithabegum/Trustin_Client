import React, { useEffect, useState } from 'react'
import images from '../../assets/align-fingers-71282_1280.jpg'
import dp from '../../assets/dp.webp'
import{get_user} from '../../service/UserService'
import { authservice} from '../../service/AuthService'
import { getbyuser_company} from '../../service/CompanyService'
import './landing.css'
import { Link } from 'react-router-dom'
const Landing = () => {
  const [user, setUser] = useState([])
  const [company, setCompany] = useState([])
  const Authuser=authservice.getCurrentUser()
useEffect(() => {
  getUser()
  getCompany()
}, [])

console.log(Authuser._id)
  const getUser = ()=>{
    get_user(Authuser._id).then(res=>{
      if(res.data.isSuccess==="true"){
      setUser(res.data.result)
      }
    })
  }
  const getCompany = ()=>{
    getbyuser_company(Authuser.email).then(res=>{
      if(res.data.isSuccess==="true"){
        authservice.setCurrentCompany(res.data.result)
      setCompany(res.data.result)
     
      }
    })
  }
  const coverimg =`http://localhost:8080/${company.profileimgae}`
  const dpimg =`http://localhost:8080/${user.profileimg}`
 
  return (
    <div>
        <div className="container">
           <div className="header">
           
                  
                 <img src={coverimg || images} alt='coverpic' className='img-fluid  landingimg'/>
                 <div className='profileimg'>
                 <img src={dpimg || dp} alt='coverpic' className='img-fluid dp'/>
                 </div>
                 
           </div>
           <div>
           <div className="content my-5 mx-auto d-flex justify-content-between">
            <div><p><b>Name :</b> {user.username}</p><p><b>Email :</b> {user.email}</p></div>
            <div className=''>
            <p><b>Company Name : </b>{company.companyname}</p>
            <p><b>Email :</b> {company.companyemail}</p>
            </div>
           </div>
           <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum accusamus veritatis vero praesentium expedita consequatur fugit. Expedita commodi, perspiciatis facilis, pariatur unde, enim illum porro fuga nulla magnam laudantium.
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum accusamus veritatis vero praesentium expedita consequatur fugit. Expedita commodi, perspiciatis facilis, pariatur unde, enim illum porro fuga nulla magnam laudantium.</p>
        </div>
        </div>
    </div>
  )
}

export default Landing