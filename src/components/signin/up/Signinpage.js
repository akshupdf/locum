import React, { useEffect, useState } from 'react'
import dr from '../../../assets/dr.png'
import dr1 from '../../../assets/dr1.png'
import { Hand } from '../../../reusable/Icons';


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
    const [otp, setOtp] = useState('');
    const [btnText, setBtnText] = useState('Send OTP');
    const [error, setError] = useState('');
    const disable = validateMobileOrEmail(mobileNo) !== null;
  const [timer, setTimer] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const [resendDisabled, setResendDisabled] = useState(false);

    const startTimer = () => {
        const duration = 30; // Seconds
        setSeconds(duration);
        setResendDisabled(true);
        setTimer(
          setInterval(() => {
            setSeconds((prevSeconds) => {
              if (prevSeconds <= 1) {
                clearInterval(timer);
                setResendDisabled(false);
                return 0;
              }
              return prevSeconds - 1;
            });
          }, 1000)
        );
      };
    
      const stopTimer = () => {
        clearInterval(timer);
        setTimer(null);
        setSeconds(0);
      };
    
      useEffect(() => {
        if (seconds === 0 && timer !== null) {
          stopTimer();
        }
      }, [seconds, timer]);
    
    //   const handleResendOTP = () => {
    //     startTimer();
    //   };

      const onSubmit = (e) => {
        e.preventDefault();
    
        const validationError = validateMobileOrEmail(mobileNo);
        if (validationError) {
          setError(validationError);
          return;
        }
        setBtnText('Verify and Proceed');
        startTimer();
      };
    

  return(
    <div className='signup'>
        <div className='signleft'>
        <img src={dr} alt="locum" className='img1'></img>
        <img src={dr1} alt="locum" className='img2'></img>
        </div>
        <div className='signright'>

            <Hand />
        <input type='text'
                  className="input-background-color login-input"
                  value={mobileNo}
                  onChange={(e) => {
                    setMobileNo(e.target.value);
                    setError(validateMobileOrEmail(e.target.value));
                  }}
                  placeholder="Enter Your mobile number"
                />
</div>

    </div>
   )

 }