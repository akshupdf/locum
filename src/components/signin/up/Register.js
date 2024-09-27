import React, { useEffect, useState } from "react";
import dr from "../../../assets/dr.png";
import dr1 from "../../../assets/dr1.png";
import { Locume } from "../../../reusable/Icons";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";
import { useDispatch, useSelector } from "react-redux";
import { addUser, generateOtp, getSpecialties, verifyOtp } from "../../../redux/apiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const validateMobileOrEmail = (value) => {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const mobileRegex = /^[0-9]{10}$/;

//   if (!value) {
//     return "Required";
//   }

//   if (!emailRegex.test(value) && !mobileRegex.test(value)) {
//     return "Invalid email or mobile number";
//   }

//   return null;
// };

export const Register = () => {
  const dispatch = useDispatch();

  const { specialties , loading, error, mobileVerficationId ,verifyOtpError } = useSelector(
    (state) => state.user
  );

  const validationSchema = yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    mobileNo: yup
      .string()
      .required("mobile No is required")
      .min(10, "Mobile number must contain 10 digits")
      .max(10, "Mobile number must contain 10 digits")
  });

  const [otpSent, setOtpSent] = useState(false);
  const [isResendVisible, setIsResendVisible] = useState(false);
  const [timer, setTimer] = useState(null);
  const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    const duration = 30; 
    setSeconds(duration);
    setOtpSent(true);
    setTimer(
      setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds <= 1) {
            clearInterval(timer);
            setIsResendVisible(true);
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

  let verifyId

  const otpId = localStorage.getItem('otpId');
  
  if(otpId){  
  verifyId = otpId
  }else{
    verifyId = error?.result?.otpVerficationId
  }

  const [otp, setOtp] = useState('');
  const [initialValues, setInitialValues] = useState({
    firstName: "",
    lastName: "",
    mobileNo: "",
    gender: "",
    availability: [],
    medicalId: "",
    location: "",
    specialization: "",
    hourlyRate: "",
    termsAccepted: false,
    preferredSpecialities:[],
    mobileVerficationId: "" 
  });

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {

        const data = {
          ...values,
          mobileVerficationId : verifyId
        }

        console.log(values)

        // const addUserResult = await dispatch(addUser(data)).unwrap();
  
        // toast(addUserResult.error ? addUserResult.error : "User Has been registered");
  
        // if (!addUserResult.error) {
        //   window.location.href = `/signin`;
        // }
      } catch (error) {
        toast(error.message || "User Registration Failed");
      }
    },
  });

  const sendOtp = async (data) => {
    const isValidMobileNumber = /^\d{10}$/.test(data);


    if (isValidMobileNumber) {
      const values = {
        mobileNumber: data,
        otpType: 2,
      };
  
      try {
          

        if (error) {  
          toast("Mobile number already verified");
        } else {
          dispatch(generateOtp(values));
          startTimer()
          toast("Otp Sent Successfully");
        }
      } catch (error) {
        toast(error.message || "An error occurred while sending the OTP");
      }
    } else {
      toast("Invalid mobile number. It must be exactly 10 digits.");
  }
  };

  const verifyOtp2 = async (data) => {
    const values = {
      mobileNumber: data,
      otp: otp,
    };
    if(error){
      toast(error || "Otp Mismatched");
    }else{   
      dispatch(verifyOtp(values));
      toast("Otp Verified");
    }
     
  };

  // const specialties = [
  //   "Anesthesiology",
  //   "Cardiology",
  //   "Clinical Social Work",
  //   "Dermatology",
  //   "Emergency medicine",
  //   "Endocrinology",
  //   "Gastroenterology",
  //   "Hospital medicine",
  //   "Medical oncology",
  //   "Nephrology",
  //   "Neurology",
  //   "Women's Health",
  //   "Ophthalmology",
  //   "Otolaryngology/ENT",
  //   "Primary care",
  //   "Physiatry",
  //   "Behavioral Health",
  //   "Psychology",
  //   "Radiology",
  //   "Radiation oncology",
  //   "Rheumatology",
  //   "Surgery",
  //   "Urology"
  // ];

  useEffect(() => {
      dispatch(getSpecialties());
  }, []);



  return (
    <div className="signup">
      
      <div className="signleft signleft2">
      <button onClick={() => window.location.href = '/'} className="back-btn"><svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="22.5" cy="22.5" r="21.5" stroke="#ffffff" stroke-width="2"/>
<path d="M29.0625 21.5625H17.9438L21.3469 17.475C21.506 17.2835 21.5826 17.0367 21.5597 16.7888C21.5369 16.5409 21.4165 16.3122 21.225 16.1531C21.0335 15.9939 20.7867 15.9174 20.5388 15.9402C20.2909 15.9631 20.0623 16.0835 19.9031 16.275L15.2156 21.9C15.1841 21.9447 15.1559 21.9917 15.1312 22.0406C15.1312 22.0875 15.1313 22.1156 15.0656 22.1625C15.0231 22.2699 15.0009 22.3844 15 22.5C15.0009 22.6155 15.0231 22.73 15.0656 22.8375C15.0656 22.8843 15.0656 22.9125 15.1312 22.9593C15.1559 23.0082 15.1841 23.0552 15.2156 23.1L19.9031 28.725C19.9913 28.8308 20.1017 28.9159 20.2264 28.9742C20.3512 29.0326 20.4873 29.0627 20.625 29.0625C20.844 29.0629 21.0563 28.9866 21.225 28.8468C21.3199 28.7681 21.3984 28.6715 21.4559 28.5624C21.5134 28.4533 21.5489 28.334 21.5602 28.2112C21.5715 28.0884 21.5585 27.9646 21.5219 27.8468C21.4853 27.7291 21.4258 27.6197 21.3469 27.525L17.9438 23.4375H29.0625C29.3111 23.4375 29.5496 23.3387 29.7254 23.1629C29.9012 22.9871 30 22.7486 30 22.5C30 22.2513 29.9012 22.0129 29.7254 21.837C29.5496 21.6612 29.3111 21.5625 29.0625 21.5625Z" fill="#ffffff"/>
</svg>
 </button>
        <div className="svg-box" onClick={() => window.location.href = '/'}>
     
   
 <Locume />
        </div>

        <div className="img-box">
          <img src={dr} alt="locum" className="img1"></img>
          <img src={dr1} alt="locum" className="img2"></img>
        </div>
      </div>
      <div className="signright signright2">
        <h1 className="reg-head">Register As Locum</h1>

        <form onSubmit={formik.handleSubmit}>
          <div className="input-box">
            <div className="input-text-box">
              <h2>First Name</h2>
              <InputText
                className={`login-input ${
                  formik.touched.firstName && formik.errors.firstName
                    ? "p-invalid"
                    : ""
                }`}
                name="firstName"
                value={formik.values.firstName}
                onChange={(e) => {
                  let value = e.target.value;
                  if (!value.startsWith("Dr. ")) {
                    value = "Dr. " + value;
                  }
                  
                  formik.setFieldValue("firstName", value);
                }}
                onBlur={formik.handleBlur}
                placeholder="First Name"
              />
              <div>
                {formik.touched.firstName && formik.errors.firstName && (
                  <small className="p-error">{formik.errors.firstName}</small>
                )}
              </div>
            </div>

            <div className="input-text-box">
              <h2>Last Name</h2>
              <InputText
                className=" login-input"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Last Name"
              />
                   <div>
                {formik.touched.lastName && formik.errors.lastName && (
                  <small className="p-error">{formik.errors.lastName}</small>
                )}
              </div>
            </div>
          </div>
          <div className="input-box">
            <div className="input-text-box ">
            <h2 className="col-6">Mobile Number</h2>
            <div className='otp-box addon'>
         
       
              <InputText
                className={`login-input  ${
                  formik.touched.mobileNo && formik.errors.mobileNo
                    ? "p-invalid"
                    : ""
                }`}
                name="mobileNo"
                value={formik.values.mobileNo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter mobile number"
              />

                  <span className="p-inputgroup-addon p-inputgroup-addon2" onClick={() => sendOtp(formik.values.mobileNo)} >

{isResendVisible ? "Resend OTP" : otpSent ? ` (${seconds}s)` : "Send OTP"}

</span>
     </div>
              {/* <button
                className="btn2 col-4"
                onClick={() => sendOtp(formik.values.mobileNo)}
                type="button"
              >
                Send Otp
              </button> */}
              {formik.touched.mobileNo && formik.errors.mobileNo && (
                <small className="p-error">{formik.errors.mobileNo}</small>
              )}
            </div>
            <div className="input-text-box ">
              <h2 className="col-6">OTP</h2>
              <div className="otp-box addon">
              <InputText
                className=" login-input"
                name="mobileVerficationId"
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
                placeholder="Enter OTP"
                type='password'

              />
              <span className="p-inputgroup-addon p-inputgroup-addon2"  onClick={() => verifyOtp2(formik.values.mobileNo)}>
                  Verify OTP
                  </span>
              </div>
            
              {/* <button
                className="btn2 col-4"
                onClick={() => verifyOtp2(formik.values.mobileNo)}
                type="button"
              >
                Verify Otp
              </button> */}
            </div>
          </div>
          {/* <div className="input-box">
          
          </div> */}

          <div className="input-box">
            <div className="input-text-box">
              <h2>Availability</h2>
              <MultiSelect
                className="login-input-Speciality"
                name="availability"
                value={formik.values.availability}
                options={[
                  "Morning",
                  "Afternoon",
                  "Evening",
                  "Night"
                ]}
                onChange={(e) => formik.setFieldValue("availability", e.value)}
                placeholder="Confirm Availability"
              />{" "}
            </div>

            <div className="input-text-box">
              <h2>Gender</h2>
              <Dropdown
                className="login-input-Speciality"
                name="gender"
                value={formik.values.gender}
                options={[
                  { label: "Male", value: "Male" },
                  { label: "Female", value: "Female" },
                  { label: "Other", value: "Other" },
                ]}
                 placeholder="Select One"
                onChange={(e) => formik.setFieldValue("gender", e.value)}
              />
            </div>
          </div>
          <div className="input-box">
            <div className="input-text-box">
              <h2>Medical Id</h2>
              <InputText
                className=" login-input"
                name="medicalId"
                value={formik.values.medicalId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Medical ID"
              />{" "}
            </div>
            <div className="input-text-box">
              <h2>Location</h2>
              <InputText
                className=" login-input"
                name="location"
                value={formik.values.location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Location"
              />{" "}
            </div>
          </div>
          <div className="input-box">
            <div className="input-text-box">
              <h2>Specialization</h2>
              <MultiSelect
                className="login-input-Speciality"
                name="preferredSpecialities"
                // value={formik.values.preferredSpecialities}
                value={formik.values.preferredSpecialities} 
                options={specialties?.map((spec) => ({
                  label: spec.specialties_name,
                  value: spec.id,
                }))}
                onChange={(e) => formik.setFieldValue("preferredSpecialities", e.value)}
                placeholder="Select Specialities"
              />{" "}
            </div>
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

          {/* <div className="terms">
            <div className="terms-tick">
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
              <div className="term-condtion">
               <p> I accept all terms and condition </p>
              </div>
            </div>
          </div> */}

          <div className='btn-box'>
          <div className='d-flex'>

          {/* <button
                className="btn3"
                onClick={() => sendOtp(formik.values.mobileNo)}
                type="button"
              >
                Send Otp
              </button> */}
            <button className="btn" type="submit">
              Register
            </button>
          </div>
          </div>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};



