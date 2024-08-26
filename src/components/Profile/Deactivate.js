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
    <div className="popup-container">
      <div className="popup-content">
        <h2><i className="fas fa-trash-alt"></i> Deactivate Account</h2>
        <form onSubmit={handleDeleteAccount}>
          <div className="input-group">
            <label>Please enter your mobile number to proceed to account deactivation.</label>
            <input
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter your mobile number*"
              required
            />
            <button type="button" onClick={handleSendOtp}>Send OTP</button>
          </div>
          <div className="input-group">
            <label>Please enter OTP to proceed to account deactivation.</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              required
            />
            <button type="button" onClick={handleVerifyOtp}>Verify OTP</button>
          </div>
          <div className="input-group">
            <label>Reason for Deactivation</label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Reason*"
              required
            />
          </div>
          <p>Deleting your account is permanent and cannot be undone. Please make sure that you have saved any important data before proceeding. If you have any doubts, you can always cancel the deletion process.</p>
          <button type="submit" className="delete-btn">Delete Account</button>
        </form>
        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
};

export default DeactivateAccountPopup;
