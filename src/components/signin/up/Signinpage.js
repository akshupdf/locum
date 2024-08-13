import React, {  useState } from 'react'
import dr from '../../../assets/dr.png'
import dr1 from '../../../assets/dr1.png'
import { ClosedEye, Hand, Locume } from '../../../reusable/Icons';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/saga-blue/theme.css';  
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { generateOtp, getUserLogin } from '../../../redux/apiSlice';




const validateMobileOrEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;
  
    if (!value) {
      return 'Required';
    }
  
    if (!emailRegex.test(value) && !mobileRegex.test(value)) {
      return 'Invalid email or mobile number';
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

    const id = localStorage.getItem("userId")
    console.log(id)

    const sendOtp = async (data) => {

      const values = {
        "mobileNumber" : data,
        "otpType" : 1
    }

    dispatch(generateOtp(values));

      // try {
      //   const response = await axios.post('http://13.127.236.115:3000/api/users/generateOtp', values);
      //   console.log('Response:', response.data.result);
      //   // Optionally redirect or handle success
      //   // window.location.href = '/signin';

      //   setOtp(response.data.result)
      // } catch (error) {
      //   console.error('Error submitting form:', error);
      //   // Handle error here
      // }
    }

    const verifyOtp = async (data) => {

      const values = {
        "mobileNumber" : data,
        "otp" : otp
    }


    dispatch(getUserLogin(values));
if(id){
window.location.href = `/profile/${id}`
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
          <div className='svg-box'>
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
          <InputText 
                className=" login-input"
                value={mobileNo}
                onChange={(e) => {
                  setMobileNo(e.target.value);
                  setError(validateMobileOrEmail(e.target.value));
                }}
                placeholder="Enter Your mobile number"
              /> 
              <h2>OTP</h2>
              <div className='otp-box'>
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
                <button className='btn2' onClick={() => sendOtp(mobileNo)}>Send Otp</button>
                <button className='btn' onClick={() => verifyOtp(mobileNo)}>Log in</button>
                </div>
           
                <p>Don't have an account? <span onClick={() => window.location.href = '/register'}>  Register Now</span></p>
              </div>

          </div>
    
    </div>
        

     
    

    </div>
   )

 }