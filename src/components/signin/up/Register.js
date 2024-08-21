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
import { addUser, generateOtp, verifyOtp } from "../../../redux/apiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validateMobileOrEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[0-9]{10}$/;

  if (!value) {
    return "Required";
  }

  if (!emailRegex.test(value) && !mobileRegex.test(value)) {
    return "Invalid email or mobile number";
  }

  return null;
};

export const Register = () => {
  const dispatch = useDispatch();

  const { userData, otp, loading, error, mobileVerficationId ,verifyOtpError } = useSelector(
    (state) => state.user
  );

  const validationSchema = yup.object({
    firstName: yup.string().required("first Name is required"),
    lastName: yup.string().required("last Name is required"),
    mobileNo: yup
      .string()
      .required("mobile No is required")
      .min(10, "Mobile number must contain 10 digits")
      .max(10, "Mobile number must contain 10 digits"),
    medicalId: yup.string().required("medical Id is required"),
  });

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
  });
  

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // const valuesForVerification = {
      //   mobileNumber: values.mobileNo,
      //   otp: otp,
      // };
  

      // const verifyOtpResult = await dispatch(verifyOtp(valuesForVerification)).unwrap();
  
      // if (verifyOtpResult.error) {

      //   toast(verifyOtpResult.error || "Otp Mismatched");
      // } else {
   
  
        // const mobileVerficationId = verifyOtpResult.result.otpVerficationId;
  
        const data = {
          ...values,
          mobileVerficationId,
        };
  

        const addUserResult = await dispatch(addUser(data)).unwrap();
  
        if (addUserResult.error) {
          toast(addUserResult.error || "User Registration Failed");
        } else {
          toast("User Has been registered");
            window.location.href = `/signin`;
        }
      
    },
  });

  const sendOtp = async (data) => {
    const isValidMobileNumber = /^\d{10}$/.test(data);


    if(error){
      toast(error || "Mobile number Already verified")
    }else{

    if (isValidMobileNumber) {
      const values = {
        mobileNumber: data,
        otpType: 2,
      };

      dispatch(generateOtp(values));
      toast("Otp Sent Successfully");
    } else {
      toast("Invalid mobile number. It must be exactly 10 digits.");
    }

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


  return (
    <div className="signup">
      <div className="signleft signleft2">
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
                  formik.touched.roomType && formik.errors.roomView
                    ? "p-invalid"
                    : ""
                }`}
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Your First Name"
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
                placeholder="Your Last Name"
              />{" "}
            </div>
          </div>
          <div className="input-box">
            <div className="input-text-box ">
            <h2 className="col-6">Mobile Number</h2>
            <div className='otp-box addon'>
         
       
              <InputText
                className={`login-input  ${
                  formik.touched.roomType && formik.errors.roomView
                    ? "p-invalid"
                    : ""
                }`}
                name="mobileNo"
                value={formik.values.mobileNo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter Your mobile number"
              />

<span className="p-inputgroup-addon"       onClick={() => sendOtp(formik.values.mobileNo)}>
                  Send OTP
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter OTP"
              />
              <span className="p-inputgroup-addon"       onClick={() => verifyOtp2(formik.values.mobileNo)}>
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
                className="login-input"
                name="availability"
                value={formik.values.availability}
                options={[
                  "8:00 am - 2.00 pm",
                  "2:00 pm - 8.00 pm",
                  "8:00 pm - 2.00 am",
                  "2:00 am - 8.00 am",
                ]}
                onChange={(e) => formik.setFieldValue("availability", e.value)}
                placeholder="Confirm Your Availability"
              />{" "}
            </div>

            <div className="input-text-box">
              <h2>Gender</h2>
              <Dropdown
                className="login-input"
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
              <InputText
                className=" login-input"
                name="specialization"
                value={formik.values.specialization}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Specialization"
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

          <div className="terms">
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
                I accept all terms and condition
              </div>
            </div>
          </div>

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



