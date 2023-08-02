import React from 'react'
import './Topbar.css'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark  fixed-top" style={{backgroundColor:"#37306B"}}>
  <div className="container-fluid">
    <Link className="navbar-brand mx-3" to="/commonlayout/landingpage">Trustin</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item mx-2">
          <Link className="nav-link" to="/commonlayout/company">Create Company</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/commonlayout/editcompany">Edit Company</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to="#">Connect</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link " to="/commonlayout/adduser">Add User</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link " to="#">Notification</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Topbar