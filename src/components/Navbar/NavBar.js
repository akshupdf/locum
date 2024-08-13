import React, { useState } from 'react'
import { Calling, Hand, LocumeLogo, LogIn } from '../../reusable/Icons'
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/apiSlice';



export const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const id = localStorage.getItem('userId');

  const dispatch = useDispatch();


  const Logout = () =>{

dispatch(userLogout())

window.location.href = '/'

  } 

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };


  return(
    <div className='navbarMain'>
    <div className='hamburger' onClick={toggleMenu}>
    <svg viewBox="0 0 100 80" width="30" height="30">
  <rect width="100" height="20" rx="10"></rect>
  <rect y="30" width="100" height="20" rx="10"></rect>
  <rect y="60" width="100" height="20" rx="10"></rect>
</svg>
      </div>



      

      <div className='logo-box'  onClick={() => window.location.href = '/' }>
  <LocumeLogo />

      </div>

  

      <div className={`list-box ${isMenuOpen ? 'active' : ''}`} >
      <ul className='list' >
      <li onClick={() => window.location.href = '/aboutus' }>About Us</li>
      <li onClick={() => window.location.href = '/contactus' }>Contact Us</li>
      <li>Blogs</li>
      <li><span> <Calling /> <p>+91 84545 84545  </p>     Customer care </span></li>
      </ul>
      </div>

      <div className={`nav-btn-box ${isMenuOpen ? 'active' : ''}`} > 
        {

          id ? <button className='nav-btn1' onClick={Logout}> <LogIn /> <p> Logout</p> </button> : <button className='nav-btn1' onClick={() => window.location.href = '/signin' }> <LogIn /> <p> Sign In</p> </button>
        }

   

{
   id ? "" :  <button className='nav-btn2' onClick={() => window.location.href = '/register'}>  Register</button>
}
     
      </div>

    </div>
   )

 }