import { InputText } from 'primereact/inputtext'
import React from 'react'
import about from '../../assets/about.png'
import hand from '../../assets/hand.png'
import { ExitIcon, Geo, Mail, Phone } from '../../reusable/Icons'


export const ContactUs = () => {
  return (
    <div className='contactus'>

      <div className='aboutbox'>
        <div className='aboutleft'>
          <h1>Contact us</h1>
          <p className='p-para'>Be a part of the future of work. Boost your career with global clients, ambitious projects and the freedom of working remotely. </p>
          <p className='p-para-txt'>  Remote. Proven. Ready.</p>
          <div className='d-flex'>
            <InputText
              className="input-box col-6"
              name="email"
              placeholder="Enter your email"
            />
            <button className='regbtn d-flex align-items-center'>Send Now  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.82422 10H15.4909" stroke="white" stroke-width="1.66667" stroke-linecap="square" stroke-linejoin="round" />
              <path d="M10.6602 4.16699L16.4935 10.0003L10.6602 15.8337" stroke="white" stroke-width="1.66667" stroke-linecap="square" stroke-linejoin="round" />
            </svg>
            </button>


          </div>

        </div>
        <div className='aboutright'>
          <img src={about} alt="about"></img>
        </div>
      </div>

      <div className='form-box-main'>
        <div className='form-box'>
          <div className='d-flex justify-content-center contact-infooo'>Contact information</div>
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

          <div className='contact-infooo'>Get in touch with us</div>
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
            <button className='signup-btn' onClick={() => window.location.href = '/register'}>  Sign In
              {/* <span>+</span> */}
            </button>
          </div>
          <div className='join-box-right'>
            <img src={hand} alt="hand"></img>
          </div>

        </div>
      </div>

    </div>
  )

}