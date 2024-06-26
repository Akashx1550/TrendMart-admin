import React from 'react'
import "./Navbar.css"
import navlogo from "../../assets/logoAdmin.png"
import navProfile from "../../assets/profile-1.jpg"
const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={navlogo} className='nav-logo' alt="" />
            <img src={navProfile} className='nav-profile' alt="" />
        </div>
    )
}

export default Navbar