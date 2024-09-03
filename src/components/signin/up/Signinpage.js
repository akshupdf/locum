import React, {  useEffect, useState } from 'react'
import dr from '../../../assets/dr.png'
import dr1 from '../../../assets/dr1.png'
import { ClosedEye, Hand, Locume } from '../../../reusable/Icons';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/saga-blue/theme.css';  
import { useDispatch, useSelector } from 'react-redux';
import { generateOtp, getUserLogin } from '../../../redux/apiSlice';
import { ToastContainer, toast } from 'react-toastify';

const validateMobileOrEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;
  
    if (!value) {
      return 'Required';
    }
  
    if (!emailRegex.test(value) && !mobileRegex.test(value)) {
      return 'Invalid mobile number';
    }
  
    return null;
  };


export const Signup = () => {


    const [mobileNo, setMobileNo] = useState('');
    const [timer, setTimer] = useState(30);
    const [isResendVisible, setIsResendVisible] = useState(false);
    const disable = validateMobileOrEmail(mobileNo) !== null;
    const [showOtp, setShowOtp] = useState(false);
    const [error2, setError] = useState('')
    const [otpSent, setOtpSent] = useState(false);

    const dispatch = useDispatch();
    const [otp, setOtp] = useState('');

   

    const sendOtp = async (data) => {

      if(data.length <= 0){
        toast( "Please Enter Mobile Number");
      }else{

      const values = {
        "mobileNumber" : data,
        "otpType" : 1
    }

    toast( "OTP Has been sent on Mobile Number !");

    try {
      await dispatch(generateOtp(values)).unwrap();
      setOtpSent(true);
      setIsResendVisible(false);
      setTimer(30);
      
    } catch (error) {
    
      toast(error || "User Not found , Please Register");
    }
  }
    }

    const verifyOtp = async (data) => {

      const values = {
        "mobileNumber" : data,
        "otp" : otp
    }
   try {

   await dispatch(getUserLogin(values)).unwrap();

   const id = localStorage.getItem("userId")

    if(id){
      window.location.href = `/profile/${id}`
      }
      
    } catch (error) {
    
      toast(error || "Otp Mismatched");
    }

  



      // try {
      //   const response = await axios.post('http://13.127.236.115:3000/api/users/userLogin', values);
      //   console.log('Response:', response.data.result);
      //   // Optionally redirect or handle success
      //   // window.location.href = '/signin';
      // } catch (error) {
      //   console.error('Error submitting form:', error);
      //   // Handle error here
      // }
    }

    useEffect(() => {
      let interval = null;
      if (timer > 0) {
        interval = setInterval(() => {
          setTimer((prevTimer) => prevTimer - 1);
        }, 1000);
      } else {
        setIsResendVisible(true);
      }
  
      return () => clearInterval(interval);
    }, [timer,otp]);

  return(
    <div className='signup'>
        <div className='signleft'>

          <div className='svg-box' onClick={() => window.location.href = '/'}>
          <button onClick={() => window.location.href = '/'} className="back-btn2"><svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="22.5" cy="22.5" r="21.5" stroke="#ffffff" stroke-width="2"/>
<path d="M29.0625 21.5625H17.9438L21.3469 17.475C21.506 17.2835 21.5826 17.0367 21.5597 16.7888C21.5369 16.5409 21.4165 16.3122 21.225 16.1531C21.0335 15.9939 20.7867 15.9174 20.5388 15.9402C20.2909 15.9631 20.0623 16.0835 19.9031 16.275L15.2156 21.9C15.1841 21.9447 15.1559 21.9917 15.1312 22.0406C15.1312 22.0875 15.1313 22.1156 15.0656 22.1625C15.0231 22.2699 15.0009 22.3844 15 22.5C15.0009 22.6155 15.0231 22.73 15.0656 22.8375C15.0656 22.8843 15.0656 22.9125 15.1312 22.9593C15.1559 23.0082 15.1841 23.0552 15.2156 23.1L19.9031 28.725C19.9913 28.8308 20.1017 28.9159 20.2264 28.9742C20.3512 29.0326 20.4873 29.0627 20.625 29.0625C20.844 29.0629 21.0563 28.9866 21.225 28.8468C21.3199 28.7681 21.3984 28.6715 21.4559 28.5624C21.5134 28.4533 21.5489 28.334 21.5602 28.2112C21.5715 28.0884 21.5585 27.9646 21.5219 27.8468C21.4853 27.7291 21.4258 27.6197 21.3469 27.525L17.9438 23.4375H29.0625C29.3111 23.4375 29.5496 23.3387 29.7254 23.1629C29.9012 22.9871 30 22.7486 30 22.5C30 22.2513 29.9012 22.0129 29.7254 21.837C29.5496 21.6612 29.3111 21.5625 29.0625 21.5625Z" fill="#ffffff"/>
</svg>
 </button>
          <Locume />
          </div>
   
            <div className='img-box'>
            <img src={dr} alt="locum" className='img1'></img>
            <img src={dr1} alt="locum" className='img2'></img>
            </div>
      
        </div>

          <div className='signright signright2'>

          <Hand />

          <h1>Welcome back!</h1>
          <p>Please login to access your account.</p>

          <div>
              <h2>Mobile Number</h2>
              <div className='otp-box otp-box2'>
              <InputText 
                className=" login-input login-input2"
                value={mobileNo}
                onChange={(e) => {
                  setMobileNo(e.target.value);
                  setError(validateMobileOrEmail(e.target.value));
                }}
                placeholder="Enter mobile number"
              /> 
                   <span className="p-inputgroup-addon" onClick={() => sendOtp(mobileNo)}>

                   {isResendVisible ? "Resend OTP" : otpSent ? ` (${timer}s)` : "Send OTP"}
                 
                  </span>
              </div>
       <div className="p-error">
       {error2 && (
                    <small className="p-error">{error2}</small>
                  )}
       </div>




              <h2>OTP</h2>
              <div className='otp-box otp-box2'>
              <InputText 
                className=" login-input"
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
                placeholder="Enter OTP"
                type={showOtp ? 'text' : 'password'}
              />
                 <span className="p-inputgroup-addon eye" onClick={() => setShowOtp(!showOtp)}>
                     {showOtp ? <ClosedEye /> : <ClosedEye />}
                  </span>
              </div>
              
              <div className=''>
                <div className='btn-box2'>
                {/* <button className='btn3' onClick={() => sendOtp(mobileNo)}>Send Otp</button> */}
                <button className='btn' onClick={() => verifyOtp(mobileNo)}>Log in</button>
              
           
                <p className='reg'>Don't have an account? <span onClick={() => window.location.href = '/register'}>  Register Now</span></p>
                </div> </div>

          </div>
    
    </div>
        

     
    <ToastContainer />

    </div>
   )

 }