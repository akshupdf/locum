import React, {  useState } from 'react'
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
    const disable = validateMobileOrEmail(mobileNo) !== null;
    const [showOtp, setShowOtp] = useState(false);
    const [error2, setError] = useState('')

    const dispatch = useDispatch();
    const { otp } = useSelector((state) => state.user);

   

    const sendOtp = async (data) => {

      if(data.length <= 0){
        toast( "Please Enter Mobile Number");
      }else{

      const values = {
        "mobileNumber" : data,
        "otpType" : 1
    }

    try {
      await dispatch(generateOtp(values)).unwrap();
      
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

  return(
    <div className='signup'>
        <div className='signleft'>
          <div className='svg-box' onClick={() => window.location.href = '/'}>
          <Locume />
          </div>
   
            <div className='img-box'>
            <img src={dr} alt="locum" className='img1'></img>
            <img src={dr1} alt="locum" className='img2'></img>
            </div>
      
        </div>

          <div className='signright'>

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
                placeholder="Enter Your mobile number"
              /> 
                   <span className="p-inputgroup-addon" onClick={() => sendOtp(mobileNo)}>
                  Send OTP
                 
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
                placeholder="Enter OTP"
                type={showOtp ? 'text' : 'password'}
              />
                 <span className="p-inputgroup-addon" onClick={() => setShowOtp(!showOtp)}>
                     {showOtp ? <ClosedEye /> : <ClosedEye />}
                  </span>
              </div>
              
              <div className='btn-box'>
                <div className='d-flex'>
                {/* <button className='btn3' onClick={() => sendOtp(mobileNo)}>Send Otp</button> */}
                <button className='btn' onClick={() => verifyOtp(mobileNo)}>Log in</button>
                </div>
           
                <p className='reg'>Don't have an account? <span onClick={() => window.location.href = '/register'}>  Register Now</span></p>
              </div>

          </div>
    
    </div>
        

     
    <ToastContainer />

    </div>
   )

 }