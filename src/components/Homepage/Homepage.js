import React from 'react'
import group from '../../assets/group.jpg'


/**
* @author
* @function HomePage
**/
export default function HomePage() {

 return(
  <div className='Homepage'>
   

    <div className='landing-box-main' >
      <div className='landing-box'>
      <div className='landing-box-lext'>
        <div className='text-box'>
        Great <span className='soft'> software</span> is
        <span className='built'> built by great  </span> <span className='team'> teams</span>
        <p>We help build and manage a team of world-class developers to bring your vision to life</p>

        </div>
        
          <div className='btn-box' >
           <button className='start-btn'>Lets's get started!</button>
              <button className='start-btn2'> 
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.999878 21.0002C0.999878 9.95455 9.95418 1.00024 20.9999 1.00024C32.0456 1.00024 40.9999 9.95455 40.9999 21.0002C40.9999 32.0459 32.0456 41.0002 20.9999 41.0002C9.95418 41.0002 0.999878 32.0459 0.999878 21.0002ZM28.4998 17.621C30.7407 19.1151 30.7407 22.8854 28.4998 24.3795L19.607 29.5215C17.5541 30.8903 14.9999 29.1607 14.9999 26.4019L14.9999 15.5985C14.9999 12.8398 17.5541 11.1102 19.607 12.479L28.4998 17.621Z" fill="url(#paint0_linear_81_3963)"/>

<defs>
<linearGradient id="paint0_linear_81_3963" x1="20.9999" y1="1.00024" x2="20.9999" y2="41.0002" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFCC21"/>
<stop offset="1" stop-color="#EA4335"/>
</linearGradient>
<linearGradient id="paint1_linear_81_3963" x1="20.9999" y1="1.00024" x2="20.9999" y2="41.0002" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFCC21"/>
<stop offset="1" stop-color="#EA4335"/>
</linearGradient>
</defs>
</svg>

              </button>
         
          </div>
       </div>
       <div className='landing-box-right'>
        <img src={group} alt='' />
        
       </div>
      </div>
    
       <div className='landing-bar'>
  <div>
    
    <h3>Our Technology Strengths Fueled by:</h3>
  </div>

  <div>
 <p>python</p> 
  </div>
  <div>
    <p>
    Swift
    </p>
    
  </div>
  <div>
    <p>
    Java
    </p>
    
  </div>
  <div>
    <p>
    Kotlin
    </p>
    
  </div>
  <div>
    <p>
    node
    </p>
    
  </div>
  <div>
 <p>
 Angular jS
 </p>
  </div>
    </div>
    </div>

    <div className='review-box-main'>
      <div className='review-box'>
      <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="32.5" cy="32.5" r="32" fill="#FFF9F3" stroke="url(#paint0_linear_81_4212)"/>
<defs>
<linearGradient id="paint0_linear_81_4212" x1="32.5" y1="0" x2="32.5" y2="65" gradientUnits="userSpaceOnUse">
<stop stop-color="#FEC023"/>
<stop offset="1" stop-color="#EF5F32"/>
</linearGradient>
</defs>

<svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.6667 2L2 20.6H17L15.3333 33L32 14.4H17L18.6667 2Z" stroke="url(#paint0_linear_81_4239)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_81_4239" x1="17" y1="2" x2="17" y2="33" gradientUnits="userSpaceOnUse">
<stop stop-color="#FEBF24"/>
<stop offset="1" stop-color="#EA4232"/>
</linearGradient>
</defs>
</svg>

</svg>

    <p>Were   <span>Safe</span></p>  
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      </div>
      <div className='review-box'>2</div>
      <div className='review-box'>3</div>
    </div>
  
    </div>
  )

}


