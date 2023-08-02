import React from 'react'
import './network.css'
import { authservice } from '../../service/AuthService'
import { Link, useNavigate } from "react-router-dom";
const Network = () => {
  const company = authservice.getCurrentCompany()
  let navigate = useNavigate()
  const handleLogout = ()=>{
    authservice.handleLogout(navigate)
  }
  const user=authservice.getCurrentUser();
 
  return (
    <div className='container-fluid'>
        <header className='networkhead'>
          <div className='d-flex justify-content-between mx-2 '>
            <Link className='py-3' style={{textDecoration:"none",color:'black'}} to="#">{user.username}</Link>
            <Link className='py-3' to="/commonlayout/edituser" style={{textDecoration:"none",color:'red'}}>Edit</Link>
          </div>
        </header>
        <div className='network-list'>
            <ul className='list'>
              
             
               {company.network.map((item,index)=>(
                <li key={index} className='connectionlist'><b className='px-2'>{item.companyname}</b>
                <p className='px-2'>{item.user}</p></li>
               ))} 
              

            </ul>
        </div>
        <footer>
            <button className='btn btn-info w-100 ' style={{backgroundColor:'#ECF2FF'}} onClick={()=>{handleLogout()}}>Logout</button>
        </footer>
    </div>
  )
}

export default Network