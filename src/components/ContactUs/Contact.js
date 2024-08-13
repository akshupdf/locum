import { InputText } from 'primereact/inputtext'
import React from 'react'
import about from '../../assets/about.png'
import hand from '../../assets/hand.png'
import { Geo, Mail, Phone } from '../../reusable/Icons'


export const ContactUs = () => {
  return(
    <div className='contactus'>

<div className='aboutbox'>
        <div className='aboutleft'>
            <h1>Contact us</h1>
            <p>Be a part of the future of work. Boost your career with global clients, ambitious projects and the freedom of working remotely. </p>
          <p>  Remote. Proven. Ready.</p> 
<div className='d-flex'>
<InputText
                className="input-box col-6"
                name="email"
                placeholder="Enter your email"
              />
<button className='regbtn'>Send Now </button>


</div>

            </div>
            <div className='aboutright'>
            <img src={about} alt="about"></img>
            </div>
        </div>

        <div className='form-box-main'>
    <div className='form-box'>
      <div className='contact-box '>
      <div className='contact-box-small'>
        <Phone />
        <h1>Phone Number</h1>
        <p>+91 8879881815 / +91 7738311925</p>
        </div>
        <div className='contact-box-small'>
          <Geo />
          <h1>Our Location</h1>
          <p>Shop No 2, Vishwakarma Opposite Om Surya apartment Sawarkar Nagar Thane West, Maharashtra ,400606</p>
        </div>
        <div className='contact-box-small'>
          <Mail />
          <h1>Our Email</h1>
          <p>info@coder.com</p>
        </div>
      </div>

      <h1>Send Us Message</h1>
      <div className='input=box'>
        <div className='row d-flex'>

          <InputText 
                className=" login-input col-5"            
                placeholder="First Name"
              /> 
                 <InputText 
                className=" login-input col-5"
                placeholder="Last Name"
              /> 
              
        </div>
        <div className='row d-flex'>

<InputText 
      className=" login-input col-5"            
      placeholder="Phone Number"
    /> 
       <InputText 
      className=" login-input col-5"
      placeholder="Your Email"
    /> 
    
</div>
<div className='row d-flex'>

<InputText 
      className=" login-input col-11"            
      placeholder="Your Message"
    /> 
   
    
</div>
<div className='row'>
<button className='msg-btn'>Send Message </button>
</div>
      </div>

    </div>
        </div>

        <div className='join-box-main'>
              <div className='circle'>

</div>
<div className='join-box'>
    <div className='join-box-left'>
    <h2>Join our talent</h2>
<h2>community.</h2>
<p>Join our global talent community to receive alerts when
new life-changing opportunities become available.</p>
<button className='signup-btn' onClick={() => window.location.href = '/register'}>Sign Up <span>+</span></button>
    </div>
    <div className='join-box-right'>
    <img src={hand} alt="hand"></img>
    </div>

</div>
              </div>

    </div>
   )

 }