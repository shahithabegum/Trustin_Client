import React from 'react'
import './Topbar.css'

const Topbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark  fixed-top" style={{backgroundColor:"#37306B"}}>
  <div className="container-fluid">
    <a className="navbar-brand mx-3" href="#">Trustin</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <a className="nav-link" href="#">Connect</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link " href="#">Add User</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link " href="#">Notification</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Topbar