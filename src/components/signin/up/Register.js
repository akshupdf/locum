import React, { useEffect, useState } from 'react'
import dr from '../../../assets/dr.png'
import dr1 from '../../../assets/dr1.png'
import { Locume } from '../../../reusable/Icons';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';  
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, generateOtp, verifyOtp } from '../../../redux/apiSlice';



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




export const Register = () => {

  const dispatch = useDispatch();
  const { userData, otp, loading, error , mobileVerficationId , } = useSelector((state) => state.user);

      const validationSchema = yup.object({
        firstName: yup.string().required('firstName is required'),
        lastName: yup.string().required('lastName is required'),
        mobileNo: yup.string().required('mobileNo is required'),
        medicalId: yup.string().required('medicalId is required'),
        termsAccepted: yup.boolean().oneOf([true], 'You must accept the terms and conditions')
      });
    
      // const [otp, setOtp] = useState('');
      const [initialValues, setInitialValues] = useState({
        firstName: '',
        lastName: '',
        mobileNo: '',
        gender: '',
        availability:[],
        medicalId:'',
        location:'',
        specialization:'',
        hourlyRate:'',
        termsAccepted: false
      });
    
      const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: true,
        onSubmit: async (values) => { 

          const data = {
            ...values,
            mobileVerficationId
          }

          dispatch(addUser(data))
          formik.resetForm();
 
        }
      })

      const sendOtp = async (data) => {

        const values = {
          "mobileNumber" : data,
          "otpType" : 2
      }

      dispatch(generateOtp(values));
    
        // try {
        //   const response = await axios.post('http://13.127.236.115:3000/api/users/generateOtp', values);
        //   console.log('Response:', response.data.result);
        //   // Optionally redirect or handle success
        //   // window.location.href = '/signin';
    
        // } catch (error) {
        //   console.error('Error submitting form:', error);
        //   // Handle error here
        // }
      }

      const verifyOtp2 = async (data) => {

        const values = {
          "mobileNumber" : data,
          "otp" : otp
      }

      dispatch(verifyOtp(values));


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

<h1 className='reg-head'>Register As Locum</h1>

<form onSubmit={formik.handleSubmit}>

<div className='input-box'>
<div  className="input-text-box">

  <h2>First Name</h2> 
<InputText 
    className=" login-input"
    name="firstName"
    value={formik.values.firstName}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    placeholder="Your First Name"
  /> </div>

  <div className="input-text-box">

  <h2>Last Name</h2>
 
  <InputText 
    className=" login-input"
    name="lastName"
    value={formik.values.lastName}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    placeholder="Your Last Name"
  /> </div>
 
  </div>
  <div className='input-box'>

  <div className="input-text-box d-flex">
  <h2 className='col-6'>Mobile Number</h2>
<InputText 
    className=" login-input col-6"
    name="mobileNo"
    value={formik.values.mobileNo}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    placeholder="Enter Your mobile number"
  />  
  
  <button className='btn2 col-4' onClick={() => sendOtp(formik.values.mobileNo)} type="button">Send Otp</button>
   </div>

  </div>
  <div className='input-box'>

  <div className="input-text-box d-flex">
  <h2 className='col-6'>OTP</h2>
<InputText 
    className=" login-input col-6"
    name="mobileVerficationId"
    value={otp}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    placeholder="Enter OTP"
  />   
    <button className='btn2 col-4' onClick={() => verifyOtp2(formik.values.mobileNo)} type="button">Verify Otp</button>
  </div>


 
  </div>

  <div className='input-box'>
  <div className="input-text-box">
  <h2>Availability</h2>
 
  <MultiSelect 
    className="login-input"
    name="availability"
    value={formik.values.availability}
    options={["8:00 am - 2.00 pm","2:00 pm - 8.00 pm","8:00 pm - 2.00 am","2:00 am - 8.00 am"]}
    onChange={(e) => formik.setFieldValue('availability', e.value)}
    placeholder="Confirm Your Availability"
  />   </div>

<div className="input-text-box">
  <h2>Gender</h2>
  <Dropdown 
     className="login-input"
     name="gender"
     value={formik.values.gender}
     options={[
      { label: 'Male', value: 'Male' },
      { label: 'Female', value: 'Female' },
      { label: 'Other', value: 'Other' },
     ]    }

     autoFocus  
     onChange={(e) => formik.setFieldValue('gender', e.value)}
  />
    
  </div>

    </div>
  <div className='input-box'>
  <div className="input-text-box">
  <h2>Medical Id</h2>
<InputText 
    className=" login-input"
    name="medicalId"
    value={formik.values.medicalId}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    placeholder="Medical ID"
  />    </div>
     <div className="input-text-box">
  <h2>Location</h2>
 
  <InputText 
    className=" login-input"
    name="location"
    value={formik.values.location}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    placeholder="Location"
  />   </div>
 
  </div>
  <div className='input-box'>

  <div className="input-text-box">
  <h2>Specialization</h2>
<InputText 
    className=" login-input"
    name="specialization"
    value={formik.values.specialization}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    placeholder="Specialization"
  />     </div>
     <div className="input-text-box">
  <h2>Rate/Hourly</h2>
 
  <InputText 
    className=" login-input"
    name="hourlyRate"
    value={formik.values.hourlyRate}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    placeholder="Rate/Hourly"
  />
    </div>
  </div>


  <div className="terms">
        <div className="terms-tick" >
          <input
            type="checkbox"
            className="mr-1"
            name="termsAccepted"
            checked={formik.values.termsAccepted}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div>
          <div className="term-condtion" >
          I accept all terms and condition
          </div>
      
        </div>
      </div>
  
  <div className='btn-box'>

  <Button className='btn' type='submit' >Register Now</Button>
  </div>

  </form>



</div>
    </div>
   )

 }