import React from 'react'
import Logo from '../Images/mobimenti_logo (2).png'
import '../Style/Navbar.css'

function Navbar() {
  return (
    <div className="Navbar">
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
    </div>
    
  )
}

export default Navbar