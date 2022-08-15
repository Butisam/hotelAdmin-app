import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">MOBeBooking</span>
        <div className="navItems">

        <nav className="nav">
     <ul className='active'>
      {/* <li>
        <Link className="navButton" to="/update"> UPDATE</Link>

      </li> */}
      <li>
      <Link className="navButton" to="/view"> VIEW</Link>
      </li>
    </ul> 
  </nav>
          {/* <button className="navButton">VIEW</button>
          <button className="navButton">UPDATE</button> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar