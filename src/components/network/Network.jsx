import React from 'react'
import './network.css'
import { authservice } from '../../service/AuthService'
import { useNavigate } from "react-router-dom";
const Network = () => {
  
  let navigate = useNavigate()
  const handleLogout = ()=>{
    authservice.handleLogout(navigate)
  }
  const user=authservice.getCurrentUser();
  return (
    <div className='container-fluid'>
        <header className='networkhead'>
          <div className='d-flex justify-content-between mx-2 '>
            <h6 className='py-3'>{user.username}</h6>
            <p className='py-3'>edit</p>
          </div>
        </header>
        <div className='network-list'>
            <ul className='list'>
                <li>shaji</li>
                <li>shaji</li>
                <li>shaji</li>
                <li>shaji</li>
                <li>shaji</li>
                <li>shaji</li>
            </ul>
        </div>
        <footer>
            <button className='btn btn-info w-100 ' style={{backgroundColor:'#ECF2FF'}} onClick={()=>{handleLogout()}}>Logout</button>
        </footer>
    </div>
  )
}

export default Network