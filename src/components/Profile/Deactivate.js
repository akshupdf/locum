import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';

const DeactivateAccountPopup = ({ isOpen, onClose }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [reason, setReason] = useState('');

  const handleSendOtp = () => {
    console.log('OTP sent to:', mobileNumber);
  };

  const handleVerifyOtp = () => {
    console.log('OTP verified:', otp);
  };

  const handleDeleteAccount = (e) => {
    e.preventDefault();
    console.log('Account deleted for reason:', reason);
  };

  if (!isOpen) return null;

  return (
<div className='deactivate'>


    <div className="popup-container ">
 
      <div className="popup-content">
        <h2> <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.875 0V1.44444H0V4.33333H1.375V23.1111C1.375 23.8773 1.66473 24.6121 2.18046 25.1539C2.69618 25.6956 3.39565 26 4.125 26H17.875C18.6043 26 19.3038 25.6956 19.8195 25.1539C20.3353 24.6121 20.625 23.8773 20.625 23.1111V4.33333H22V1.44444H15.125V0H6.875ZM4.125 4.33333H17.875V23.1111H4.125V4.33333ZM6.875 7.22222V20.2222H9.625V7.22222H6.875ZM12.375 7.22222V20.2222H15.125V7.22222H12.375Z" fill="#0866C6"/>
</svg>
  Deactivate Account         <button onClick={onClose} className="close-btn">X</button></h2>       
        <form onSubmit={handleDeleteAccount}>
          <div className="input-group">
            <label>Please enter your mobile number to proceed to account deactivation.</label>
            <div className="input-text-box ">
              <div className="otp-box addon">
              <InputText
                className=" login-input"
                name="mobileVerficationId"
                value=""             
                placeholder="Enter Mobile Number"
              />
              <span className="p-inputgroup-addon"       onClick={() => handleSendOtp()}>
                  Send OTP
                  </span>
              </div>
      
            </div>
          </div>
          <div className="input-group">
          <label>Please enter OTP to proceed to account deactivation.</label>
          <div className="input-text-box ">
              <div className="otp-box addon">
              <InputText
                className=" login-input"
                name="mobileVerficationId"
                value=""             
                placeholder="Enter OTP"
              />
              <span className="p-inputgroup-addon"       onClick={() => handleSendOtp()}>
                  Verify OTP
                  </span>
              </div>
      
            </div>
            </div>
          <div className="input-group">
            <label>Reason for Deactivation</label>
    <div className='input-text-box '>
    <div className="otp-box addon ">
            <InputText
                className=" login-input"
                name="mobileVerficationId"
                value=""             
                placeholder="Enter Reason for Deactivation"
              /> </div>
    </div>
            
          </div>
          <p>Deleting your account is permanent and cannot be undone. Please make sure that you have saved any important data before proceeding. If you have any doubts, you can always cancel the deletion process.</p>
          <button type="submit" className="delete-btn">Deactivate Account</button>
        </form>
 
      </div>
    </div>
    </div>
  );
};

export default DeactivateAccountPopup;
