import React from 'react'
import images from '../../assets/align-fingers-71282_1280.jpg'
import dp from '../../assets/dp.webp'
import './landing.css'
const Landing = () => {
  return (
    <div>
        <div className="container">
           <div className="header">
                 <img src={images} alt='coverpic' className='img-fluid  landingimg'/>
                 <div className='profileimg'>
                 <img src={dp} alt='coverpic' className='img-fluid dp'/>
                 </div>
                 
           </div>
           <div>
           <div className="content my-5 mx-auto d-flex justify-content-between">
            <div><p><b>Name :</b> Shahitha</p><p><b>Email :</b> Shahitha@gmail.com</p></div>
            <div className=''>
            <p><b>Company Name : </b>Infosys</p>
            <p><b>Email :</b> Shahitha@gmail.com</p>
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