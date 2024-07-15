import React from 'react'
import logo from '../../assets/logo.png'

/**
* @author
* @function NavBar
**/

export const NavBar = () => {
  return(
    <div className='navbar'>
      <div className='logo-box'>
      <img src={logo} alt="" className='logo'></img>
      </div>
     
      <ul className='list'>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Blogs</li>
      <li><span>+91 84545 84545      Customer care </span></li>
      </ul>
      <div className='nav-btn-box'> 
      <button className='nav-btn'> Sign In</button>
      <button className='nav-btn'>  Register</button>
      </div>
   
    </div>
   )

 }