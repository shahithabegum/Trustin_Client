import React from 'react'
import Network from '../network/Network'
import Topbar from '../Nav/Topbar'
import Landing from '../landing/Landing'
import './common.css'
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
  <Landing />
  </div>
  
 </div>
</div></div>
  )
}

export default Commonlayout