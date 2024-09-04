import React, { useEffect, useState } from 'react'
import { Calling, Hand, LocumeLogo, LogIn, Reg } from '../../reusable/Icons'
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/apiSlice';



export const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const id = localStorage.getItem('userId');

  const dispatch = useDispatch();


  const Logout = () =>{

dispatch(userLogout())

window.location.href = '/'

  } 



  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState); 
  }

  const handleClick = () => {
    if (isMobile) {
      toggleMenu(); 
    } else {
      window.location.href = '/'; 
    }
  };


  return(
    <div className='navbarMain'>
  
      <div className='logo-box'   >
      <svg viewBox="0 0 345 87" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => window.location.href = '/' }>
      <rect
        width="344.667"
        height="88"
        transform="translate(0 -1)"
        fill="#0866C6"
      />
      <path
        d="M63.8843 50.3032L63.9654 63.6228H37.3262V62.1428L63.8843 50.3032Z"
        fill="#292D32" 
      />
      <path
        d="M39.4995 61.1956L39.9897 21H29.334V63.6228H39.4995V61.1956Z"
        fill="white" 
      />
      <path
        d="M117.73 42.2835C117.73 54.8754 109.518 63.6228 97.6683 63.6228C85.8735 63.6228 77.7715 54.9311 77.7715 42.3393C77.7715 29.7474 85.9286 21 97.7234 21C109.573 21 117.73 29.6917 117.73 42.2835ZM108.306 42.2835C108.306 34.4276 104.337 29.6917 97.7785 29.6917C91.1646 29.6917 87.1963 34.4276 87.1963 42.2835C87.1963 50.1952 91.1646 54.9311 97.7785 54.9311C104.337 54.9311 108.306 50.0838 108.306 42.2835Z"
        fill="white" 
      />
      <path
        d="M151.85 63.6228C139.356 63.6228 131.533 55.4218 131.533 42.3672C131.533 29.4799 139.806 21 152.244 21C162.656 21 170.141 26.9136 171.436 36.1746H161.812C160.574 32.0462 157.028 29.7031 152.019 29.7031C145.266 29.7031 141.157 34.4451 141.157 42.3114C141.157 50.0661 145.322 54.9197 152.019 54.9197C157.141 54.9197 160.911 52.4092 162.037 48.3366H171.492C170.029 57.5418 162.262 63.6228 151.85 63.6228Z"
        fill="white" 
      />
      <path
        d="M185.297 47.1858V42.2784L194.494 29.1855V46.5623C194.494 51.8335 197.389 54.7242 202.556 54.7242C207.779 54.7242 210.731 51.7202 210.731 46.5623V21H219.928V47.1858C219.928 57.1614 213.115 63.6228 202.556 63.6228C192.053 63.6228 185.297 57.2181 185.297 47.1858Z"
        fill="white" 
      />
      <path
        d="M242.572 63.6228H233.732V21H242.572L254.959 52.7943L267.403 21H276.355V63.6228H267.515V54.6951C267.515 45.4793 267.515 43.4634 267.966 40.2955L259.126 63.6228H250.793L242.009 40.2955C242.516 43.4634 242.572 47.0345 242.572 51.6999V63.6228Z"
        fill="white" 
      />
      <path
        d="M316.711 63.6228H290.16V21H316.711V29.6398H290.16V37.9915H316.799V46.1705H290.16V54.9831H316.711V63.6228Z"
        fill="white" 
      />
    </svg>

      <button onClick={handleClick} className='ham'>Menu</button>
      </div>

  

      <div className={`list-box ${isMenuOpen ? 'active' : ''}`} >
      <ul className='list' >
      <li onClick={() => window.location.href = '/aboutus' }>About Us</li>
      <li onClick={() => window.location.href = '/contactus' }>Contact Us</li>
      <li onClick={() => window.location.href = '/signin' }>Sign In</li>
      <li onClick={() => window.location.href = '/register' }>Register</li>
      <li><span> <Calling /> <p>+91 84545 84545  </p>     Customer care </span></li>
      </ul>
      </div>

      <div className={`nav-btn-box `} > 
        {

          id ? <button className='nav-btn1' onClick={Logout}> <p> Logout</p> </button> : <button className='nav-btn1' onClick={() => window.location.href = '/signin' }>  <p> Sign In</p> </button>
        }

   

{
   id ? "" :  <button className='nav-btn2' onClick={() => window.location.href = '/register'}> Register Now</button>
}
     
      </div>

    </div>
   )

 }