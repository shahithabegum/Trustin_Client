import React from 'react'
import Network from '../network/Network'
import Topbar from '../Nav/Topbar'
import './common.css'
import { Outlet } from 'react-router-dom'
const Commonlayout = () => {
  return (
    <div><div className='main'>
    <div className="navdiv">
        <Topbar />
    </div>
 <div className="child">
  <div className='network'>
     <Network />
  </div>
  <div className='other'>
  <Outlet />
  </div>
  
 </div>
</div></div>
  )
}

export default Commonlayout