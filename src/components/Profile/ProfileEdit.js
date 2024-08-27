import React, { useEffect, useState } from "react";
import profile from "../../assets/profile.png";
import { Clock, Leafimg, Stars } from "../../reusable/Icons";
import { RadioButton } from "primereact/radiobutton";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { addUser, fetchUserWithToken, updateUser } from "../../redux/apiSlice";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import SkeletonLoader from "../../reusable/Skeleton";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import { MultiSelect } from "primereact/multiselect";
import DeactivateAccountPopup from "./Deactivate";
import { jwtDecode } from 'jwt-decode';


const selectUserInfov2 = (state) => state.user.userInfov2;

export const ProfileEdit = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  const { userData, otp, loading, error, mobileVerficationId ,verifyOtpError } = useSelector(
    (state) => state.user
  );

  const token = localStorage.getItem('jwtToken');
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.id;

  const [timeSlot, setTimeSlot] = useState("");
  const [clinic , setClinic] = useState(true);
  const [clinictime, setClinictime] = useState(true);
  const [hosp, setHosp] = useState(true)
  const [visit, setVisit] = useState(true)
  const [checked, setChecked] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState(null);
  const user = useSelector(selectUserInfov2);
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);

  const handleSpecialtyClick = (specialty) => {
    setSelectedSpecialties((prevSelected) =>
      prevSelected.includes(specialty)
        ? prevSelected.filter((s) => s !== specialty)
        : [...prevSelected, specialty]
    );
  };

  const specialties = [
    "Abdominal Radiology", "Abdominal Surgery", "Addiction Medicine", 
    "Addiction Psychiatry", "Adolescent Medicine", "Adult Congenital Heart Disease",
    "Adult Reconstructive Orthopedics", "Advanced Heart Failure and Transplant Cardiology",
    "Aerospace Medicine", "Allergy", "Allergy/Immunology", "Anatomic Pathology",
    "Anatomic/Clinical Pathology", "Anesthesiology", "Anesthesiology Critical Care Medicine",
    "Behavioral and Cognitive Psychology", "Bloodbanking/Transfusion Medicine", 
    "Brain Injury Medicine", "Burn Surgery", "Cardiac Electrophysiology", 
    "Cardiothoracic Radiology", "Cardiothoracic Surgery", "Cardiovascular Diseases",
    "Women's Imaging", "Wound Care"
  ];

  const defaultValues = {
    userId: userId,
    firstName: "",
    lastName: "",
    gender: "",
    availability: [],
    medicalId: "",
    location: "",
    hourlyRate: "",
    totalExp: "",
    ownClinic: true,
    clinicTimeSlot: [],
    clinicLocation: "",
    idealNumber: "",
    preferredSpecialities: [],
    visitHospital: true,
    visitHospitalSlot: [],
    hospitalLocation: "",
    image:"",
    aboutMe: "",
    hospitalName :  "",
    clinicName :  "",
    emailId :  ""
  };

  const [initialValues, setInitialValues] = useState(defaultValues);
  
  const mapBackendDataToFormValues = (backendData) => {

    return {
      userId: id,
      firstName: backendData?.first_name || "",
      lastName: backendData?.last_name || "",
      mobileNo: backendData?.mobile_number,
      gender: backendData?.gender || "",
      availability: backendData?.availability || [],
      medicalId: backendData?.medical_id || "",
      location: backendData?.location || "",
      hourlyRate: backendData?.hourly_rate || "",
      totalExp: backendData?.total_exp || "",
      ownClinic: backendData?.own_clinic !== undefined ? backendData?.own_clinic : true,
      clinicTimeSlot: backendData?.clinic_time_slot || [],
      clinicLocation: backendData?.clinic_location || "",
      idealNumber: backendData?.ideal_number || "",
      preferredSpecialities: backendData?.preferred_specialities || [],
      visitHospital: backendData?.visit_hospital !== undefined ? backendData?.visit_hospital : true,
      visitHospitalSlot: backendData?.visit_hospital_slot || [],
      hospitalLocation: backendData?.hospital_location || "",
      aboutMe: backendData?.about_me || "",
      image: backendData?.profile_image || "",
      hospitalName :  backendData?.hospital_name || "",
      clinicName : backendData?.clinic_name || "",
      emailId :  backendData?.email_id || ""
    };
  };

  useEffect(() => {
    if (user && user.length > 0) {
      const Values = user[0];
      const mappedValues = mapBackendDataToFormValues(Values);
      setInitialValues(mappedValues);
    }
  }, [user]);



  const formik = useFormik({
    initialValues,
    enableReinitialize: true, 
    onSubmit: async (values) => {
     
  
        const data = {
          ...values
        };
        console.log(data)

        // const addUserResult = await dispatch(updateUser(data)).unwrap();
  
        // if (addUserResult.error) {
        //   toast(addUserResult.error || "User Registration Failed");
        // } else {
        //   toast("User Has been registered");
        //     window.location.href = `/signin`;
        // }
      
    },
  });

  
  // const section = [
  //   "8:00 am - 2.00 pm",
  //   "2:00 pm - 8.00 pm",
  //   "8:00 pm - 2.00 am",
  //   "2:00 am - 8.00 am",
  // ];

  const title = [
    "Any",
    "Physician",
    "Assistant",
    "CCP",
    "CNM",
    "CNS",
    "CRNA",
    "DNAP",
    "DNP",
    "DPM",
    "LCSW",
    "NP",
    "Other",
    "PA",
    "PhD",
    "PsyD",
    "SFA",
    "Student",
  ];

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleTimeSelect = (data) => {
    setTimeSlot(data);
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    setImage(file);
  };


  useEffect(() => {
 
    if (id) {
      dispatch(fetchUserWithToken(id));
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);      
      return () => clearTimeout(timer);
    } else {
     
      setLoading(false);
    
    }
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }




  return (
    <div className="profile">

  
    <div>
  
        <div className="profile-box">
  
    <form onSubmit={formik.handleSubmit} className="d-flex">
          <div className="profile-left">
            <div className="tab-box">
            <div className="logo-box">
              <img src={formik.values?.image} alt="profile"></img>
          <div className="logo-btn">

            
              <button className="edit-btn" onClick={handleEdit}>   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
<path d="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z"></path>
</svg> </button> 
<input
    type="file"
    name="profileImage"
    accept="image/*"
    onChange={handleImageChange}
    style={{ display: 'none' }}
    id="fileInput"
  />
  <button
    type="button"
    className="btn"
    onClick={() => document.getElementById('fileInput').click()}
  >
    Upload Photo
  </button>
              </div>
            </div>
  
            <div className="name-box">
            <h3>First Name</h3>
              <div className="name-text-box">
         
              
              <InputText
                  className={`login-input ${formik.touched.firstName && formik.errors.firstName ? "p-invalid" : ""}`}
                  name="first_name"
                  value={formik.values?.firstName + " " + formik.values?.lastName }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="First Name"
              />
              <div>
                {formik.touched.firstName && formik.errors.firstName && (
                  <small className="p-error">{formik.errors.firstName}</small>
                )}
              </div>
            </div>
      
  
              <h3>Email</h3>
              <div className="name-text-box">
                <InputText
            className={`login-input`}
            value={formik.values?.emailId}
            onChange={formik.handleChange}
            name="emailId"
            placeholder="Enter Email Id"
          />
              </div>
  
              <h3>Phone Number</h3>
              <div className="name-text-box">
                {/* <p>{data?.mobile_number}</p> */}
              
                <InputText
            className={`login-input`}
            value={formik.values?.mobileNo}
            onChange={formik.handleChange}
            name="mobileNo"
            placeholder="Enter Mobile number"
            disabled={true}
          />
              </div>
  
              <h3>Location</h3>
              <div className="name-text-box">
              <InputText
            className={`login-input`}
            value={formik.values?.location}
            onChange={formik.handleChange}
            name="location"
            placeholder="Enter Location"
          />
                {/* <button className="btn"> Edit </button>{" "} */}
              </div>
  
              <h3>Medical ID</h3>
              <InputText
          className={`login-input`}
          value={formik.values?.medicalId}
          onChange={formik.handleChange}
          name="medicalId"
          placeholder="Enter Medical Id"
          disabled={true}
        />
            </div>
    </div>
            <div className="about-box">
              <div className="head">
                <h1>About Sid</h1>
                <InputText
          className={`login-input`}
          value={formik.values?.aboutMe}
          onChange={formik.handleChange}
          name="aboutMe"
          placeholder="Enter About Yourself"
        />
              </div>
            </div>
          </div>
          <div className="profile-right">
            <div className="detail-box">
              <div className="detail-text-box">
                <h2>Professional Details</h2>
                {/* <p>
                  This are the professional details shown to users in the app.
                </p> */}
              </div>
              <div>
                <Stars />
              </div>
            </div>
  
            <div className="available-box">
              <div className="d-flex">
                {" "}
                <h1>Your Availability </h1>
                <p>(Available time slot)</p>{" "}
              </div>
              <div className="">
                <div className=" d-flex">

                  
                  {/* {formik.values??.avilability?.map((timeSlot) => (
                    <div className="d-flex align-items-center cols-md-3 btn" key={timeSlot}>
                    <RadioButton
                      inputId={`avilability-${timeSlot}`}
                      name="avilability"
                      value={timeSlot}
                      onChange={formik.handleChange}
                      checked={formik.values?.avilability === timeSlot}
                    />
                    <p htmlFor={`avilability-${timeSlot}`} className="ml-2">
                      {timeSlot}
                    </p>
                  </div>
                  ))} */}

{user?.availability?.map((slot , index) => (
                    <div key={index} className="d-flex align-items-center cols-md-3 ">
                    <p className="ml-2 tuple">
                      {slot}
                    </p>
                  </div>
                  ))}
                </div>
              </div>
  
              <div className="row mt-4">
             
                <div className="col-md-6">
                  <h1>Rate/Hourly </h1>
                  <InputText
        className={`login-input`}
        value={formik.values?.hourlyRate}
        onChange={formik.handleChange}
        name="hourlyRate"
        placeholder="Rate/Hourly"
      />
                </div>
                <div className="col-md-6">
                <div className="d-flex ">
                  <h1>Total Experience</h1><p>(In Years)</p>
                  </div>
                  <div className="d-flex">
                  <InputText
        className={`login-input`}
        value={formik.values?.totalExp}
        onChange={formik.handleChange}
        name="totalExp"
        placeholder="Total experience"
      />

  
                    <span>
                     <Clock />
                    </span>
                  </div>
                </div>
              </div>
  
              <div className=" mt-4 d-flex">
                <div className="">
                  <h1>Do you have your own clinic</h1>
                  <div className="d-flex ">
  <div className="btn d-flex">
    <RadioButton
      inputId="ingredient4"
      name="ownClinic"
      value={true}
      checked={formik.values.ownClinic === true}
      onChange={formik.handleChange}
    />
    <p htmlFor="ingredient4" className="ml-2">
      Yes
    </p>
  </div>

  <div className="btn d-flex">
    <RadioButton
      inputId="ingredient5"
      name="ownClinic"
      value={false}
      checked={formik.values.ownClinic === false}
      onChange={formik.handleChange}
    />
    <p className="ml-2">No</p>
  </div>
</div>
                </div>
                <div className="ml">
                  <div className="d-flex ">
                    <h1>If you have clinic</h1> <p>(Clinic time slot)</p>
                  </div>
  
                  <div className="d-flex  ">
                    <div className="btn d-flex">
                      <RadioButton inputId="ingredient4" name="Clinic time" 
                      value={true} 
                      checked={clinictime === true}
                       onChange={(e) => setClinictime(e.value)} />
                      <p htmlFor="ingredient4" className="ml-2">
                        8
                      </p>
                    </div>
  
                    <div className="btn d-flex">
                      <RadioButton
                        inputId="ingredient4"
                        name="Clinic time"
                        value={false}
                        checked={clinictime === false} onChange={(e) => setClinictime(e.value)}
                      />
                      <p className="ml-2">2</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6">
                  <h1>Clinic Location</h1>
                  <InputText
                   className={`login-input  ${!isEditing ? '' : 'border_on'}`}
                    name="clinicLocation"
                    onChange={formik.handleChange}
                    value={formik.values?.clinicLocation}
                    placeholder="Clinic location"
                  />
                </div>
                <div className="col-md-6">
                  <h1>Clinic Name </h1>
                  <InputText
                      className={`login-input  ${!isEditing ? '' : 'border_on'}`}
                    name="clinicName"
                    onChange={formik.handleChange}
                    value={formik.values?.clinicName}
                    placeholder="Clinic Name"
                  />
                </div>
              </div>
  
              <div className="mt-4 row">
              <div className="col-md-6">
              <h1>Preferred Specialities</h1>
        <MultiSelect
        className="login-input-Speciality"
        name="preferredSpecialities"
        value={formik.values?.preferredSpecialities}
        options={specialties}
        onChange={(e) => formik.setFieldValue("preferredSpecialities", e.value)}
        placeholder="Select specialties"
      />
      </div>
      <div className="col-md-6">
              <h1> Specified category</h1>
        <MultiSelect
        className="login-input-Speciality"
        name="preferredSpecialities"
        value={formik.values?.title}
        options={title}
        onChange={(e) => formik.setFieldValue("title", e.value)}
        placeholder="Select Title"
      />
      </div>
   
    </div>
  
          
              <div className=" mt-4 d-flex">
                <div className="">
                  <h1>Do you Visit Any Hospital?</h1>
                  <div className="d-flex">
  <div className="btn d-flex">
    <RadioButton
      inputId="ingredient4"
      name="ownClinic"
      value={true}
      checked={formik.values.ownClinic === true}
      onChange={formik.handleChange}
    />
    <p htmlFor="ingredient4" className="ml-2">
      Yes
    </p>
  </div>

  <div className="btn d-flex">
    <RadioButton
      inputId="ingredient5"
      name="ownClinic"
      value={false}
      checked={formik.values.ownClinic === false}
      onChange={formik.handleChange}
    />
    <p className="ml-2">No</p>
  </div>
</div>
                </div>
              
                <div className="ml">
                  <div className="d-flex ">
                    <h1>If do you Visit Any Hospital?</h1>{" "}
                    <p>(Hospital time slot)</p>
                  </div>
  
                  <div className="d-flex  ">
                    <div className="btn d-flex">
                      <RadioButton inputId="ingredient4"  name="Hospital time" value={true} checked={hosp === true} onChange={(e) => setHosp(e.value)} />
                      <p htmlFor="ingredient4" className="ml-2">
                        8
                      </p>
                    </div>
  
                    <div className="btn d-flex">
                      <RadioButton
                        inputId="ingredient4"
                        name="Hospital time "
                        value={false}
                        checked={hosp === false} onChange={(e) => setHosp(e.value)}
                     
                      />
                      <p className="ml-2">10</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h1>Hospital Location</h1>
                  <InputText
                   className={`login-input  ${!isEditing ? '' : 'border_on'}`}
                    name="hospitalLocation"
                    value={formik.values?.hospitalLocation}
                    onChange={formik.handleChange}
                    placeholder="Hospital location"
                  />
                </div>
                <div className="col-md-6">
                  <h1>Hospital Name </h1>
                  <InputText
                      className={`login-input  ${!isEditing ? '' : 'border_on'}`}
                    name="Hospital Name"
                    value={formik.values?.hospitalName}
                    onChange={formik.handleChange}
                    placeholder="Hospital Name "
                  />
                </div>
                </div>
             
              <div className="mt-4 d-flex">
                <Checkbox
                  onChange={(e) => setChecked(e.checked)}
                  checked={checked}
                  className="mr"
                ></Checkbox>
                Send me useful monthly newsletters, alerts, and tips on applying
                for jobs!
              </div>
  
              <div className="mt-4 ">
               
              </div>
              <div className="mt-4">
                <button className="reg-btn" type="submit" >APPLY CHANGES </button>
              </div>
              <div className="mt-4">
                <p>
                  By creating an account, you agree to our
                  <span  onClick={() => (window.location.href = "/privacy")}> Terms of Use</span>{" "}
                </p>
              </div>
            </div>
          </div>
  </form>
        </div>
  
       <div className="text-box">
          <h1>Communication preferences</h1>

          <p>
  Medrecruit and our partner Medworld will occasionally email you about news and opportunities we believe you'll find valuable. While your profile is being finalized, take the opportunity to review and prepare for the next step in your career. You can <span>download your resume</span> to ensure it's up-to-date and ready for any upcoming opportunities.
</p>
          <h1 >Deactivate your account</h1>
          <p>
            Deactivating your account will remove you from all alerts and mailing
            lists immediately and deleted in accordance with our{" "}
            <span>PrivacyPolicy</span> . A member of our team will then be in
            touch To finalise the deactivation of your account.
          </p>
  
          <button onClick={openPopup}> Deactivate your account</button>

          <DeactivateAccountPopup isOpen={isPopupOpen} onClose={closePopup} />
        </div>
  
        <div className="feedbox">
          <div className="feedbox-small">
            <Leafimg />
            <p>
              Great experience. [Melissa] really dedicates time to make sure she
              understands your past and current skills and puts it to paper to
              make you as attractive as you really are. Thank you. My wife's CV is
              next.
            </p>
            <h1>Eyako Wurapa</h1>
          </div>
          <div className="feedbox-small mt-4">
            <Leafimg />
            <p>
              I found a job! Thanks to locum.com , a recruiter, who actually read
              my background, put me in touch with a client looking for someone
              with my qualifications. Given that I work in a very small health
              care niche the chances of my finding this employer on my own would
              be slim. Thanks for your help.
            </p>
            <h1>Susan Pearson</h1>
          </div>
          <div className="feedbox-small">
            <Leafimg />
            <p>
              Thank you for all that you do. I started getting interviews almost
              immediately after using your resume, and I now have an offer in hand
              that I have accepted. It's all thanks to your new and improved
              resume that I got the job.
            </p>
            <h1>Rebecca Dickerson</h1>
          </div>
        </div>
  </div>
            
            
       
    
    <ToastContainer />
    </div>
  );
};
