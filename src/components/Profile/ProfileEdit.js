import React, { useEffect, useState } from "react";
import profile from "../../assets/profile.png";
import { Clock, Leafimg, Stars } from "../../reusable/Icons";
import { RadioButton } from "primereact/radiobutton";
import { InputText  } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { addUser, fetchUserWithToken, getCategory, getSpecialties, updateUser } from "../../redux/apiSlice";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import SkeletonLoader from "../../reusable/Skeleton";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import { MultiSelect } from "primereact/multiselect";
import DeactivateAccountPopup from "./Deactivate";
import jwtDecode from "jwt-decode";


const selectUserInfov2 = (state) => state.user.userInfov2;


export const ProfileEdit = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  const { userData, otp, loading,specialties,category, error, mobileVerficationId ,verifyOtpError } = useSelector(
    (state) => state.user
  );

  const token = localStorage.getItem('jwtToken');
  // const decodedToken = jwtDecode(token);
  // const userId = decodedToken.id;

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

  // const specialties = [
  //   "Abdominal Radiology", "Abdominal Surgery", "Addiction Medicine", 
  //   "Addiction Psychiatry", "Adolescent Medicine", "Adult Congenital Heart Disease",
  //   "Adult Reconstructive Orthopedics", "Advanced Heart Failure ",
  //   "Aerospace Medicine", "Allergy", "Allergy/Immunology", "Anatomic Pathology",
  //   "Anatomic/Clinical Pathology", "Anesthesiology", "Anesthesiology Critical Care Medicine",
  //   "Behavioral and Cognitive Psychology", "Bloodbanking/Transfusion Medicine", 
  //   "Brain Injury Medicine", "Burn Surgery", "Cardiac Electrophysiology", 
  //   "Cardiothoracic Radiology", "Cardiothoracic Surgery", "Cardiovascular Diseases",
  //   "Women's Imaging", "Wound Care"
  // ];

  const defaultValues = {
    firstName: "",
    lastName: "",
    gender: "",
    availability: [],
    medicalId: "",
    location: "",
    hourlyRate: "",
    totalExp: "",
    ownClinic: "",
    ownHospital:"",
    clinicTimeSlot: [],
    clinicLocation: "",
    idealNumber: "",
    preferredSpecialities: [],
    visitHospital: "",
    visitHospitalSlot: [],
    hospitalLocation: "",
    image:"",
    aboutMe: "",
    hospitalName :  "",
    clinicName :  "",
    emailId :  "",
    category_name: []
  };

  const [initialValues, setInitialValues] = useState(defaultValues);
  
  const mapBackendDataToFormValues = (backendData) => {

    return {
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
      ownHospital: backendData?.own_hospital !== undefined ? backendData?.own_hospital : true,
      clinicTimeSlot: backendData?.clinic_time_slot || [],
      clinicLocation: backendData?.clinic_location || "",
      idealNumber: backendData?.ideal_number || "",
      preferredSpecialities: specialties && specialties
      .filter(spec => backendData?.preferred_specialities?.includes(spec.id))
      .map(spec => ( spec?.specialties_name || [] )) ,
      visitHospital: backendData?.visit_hospital !== undefined ? backendData?.visit_hospital : true,
      visitHospitalSlot: backendData?.visit_hospital_slot || [],
      hospitalLocation: backendData?.hospital_location || "",
      aboutMe: backendData?.about_me || "",
      image: backendData?.profile_image || "",
      hospitalName :  backendData?.hospital_name || "",
      clinicName : backendData?.clinic_name || "",
      emailId :  backendData?.email_id || "",
      category_name: category && category
      .filter(spec => backendData?.category_name?.includes(spec.id))
      .map(spec => ( spec?.category_name || [] ))
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


      const formData = new FormData();

      for (const key in values) {

        if (Array.isArray(values[key])) {
          values[key].forEach(value => {
            formData.append(key, value || "NA");
          });
        } else {
          const value = values[key] || "NA";
          formData.append(key, value);
        }
      }
      if(image){
        formData.append('image' , values.image)
      }
      try {

        const addUserResult = await dispatch(updateUser(formData)).unwrap();
  
        if (addUserResult.error) {
          toast(addUserResult.error || "User Registration Failed");
        } else {
          toast("User Info Has been Updated");
          // window.location.href = `/profile/${id}`;
        }
      } catch (error) {
        toast("Session expired . Please Logout and Sign In again");
      }
    },
  });
  

  
  const section = [
    "Morning",
    "Afternoon",
    "Evening",
    "Night"
  ];

  const slot = [
    "8.00 AM - 2.00 PM",
    "4.00 PM - 8.00 PM",
    "8.00 PM - 12.00 AM",
    "6.00 AM - 12.00 AM"
  ];

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

  useEffect(() => {
    dispatch(getSpecialties());
    dispatch(getCategory());
}, []);

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
    if (file) {
      formik.setFieldValue("image", file); 
    }
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
  
    <form onSubmit={formik.handleSubmit} className="profile-form">
          <div className="profile-left">
            <div className="tab-box">
            <div className="logo-box">
              <img src={image ? image : formik.values?.image} alt="profile"></img>
          <div className="logo-btn">

          <button className="btn" onClick={() => window.location.href = `/profilev2/${id}`}>
      Edit
    </button>
<input
  type="file"
  name="profileImage"
  accept="image/*"
  onChange={handleImageChange}
  id="fileInput"
  style={{ display: 'none' }} 
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
              <div className="d-flex">
                <div>

               
              <h3>First Name</h3>
              <div className="name-text-box">
         
              
              <InputText
                  className={`login-input ${formik.touched.firstName && formik.errors.firstName ? "p-invalid" : ""}`}
                  name="firstName"
                  value={formik.values?.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="First Name"
              />
               </div>
             
            </div>
            {/* <div>
              <h3>Last Name</h3>
              <div className="name-text-box">
         
              
              <InputText
                  className={`login-input ${formik.touched.firstName && formik.errors.firstName ? "p-invalid" : ""}`}
                  name="lastName"
                  value={formik.values?.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Last Name"
              />
                    </div>
              </div> */}
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
                <InputTextarea 
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
             
              <div className="col-md-6">
              <div className="d-flex">
                {" "}
                <h1>Your Availability </h1>
                <span className="top-p">(Available Shift)</span>{" "}
              </div>
        <MultiSelect
        className="login-input-Speciality"
        name="availability"
        value={formik.values?.availability}
        options={section}
        onChange={(e) => formik.setFieldValue("availability", e.value)}
        placeholder="Select Availability"
      />
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
                  <h1>Total Experience</h1><span className="top-p">(In Years)</span>
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
  
              <div className="row mt-4">
                <div className="col-md-6">
                  <h1>Do you have your own clinic ?</h1>
                  <div className="d-flex ">
  <div className="tuple d-flex">
    <RadioButton
      inputId="ingredient4"
      name="ownClinic"
      value={true}
      checked={formik.values.ownClinic === true}
      onChange={(e) => {
        formik.setFieldValue("ownClinic", true); 
      }}
    />
    <span htmlFor="ingredient4" className="ml-2">
      Yes
    </span>
  </div>

  <div className="tuple d-flex">
    <RadioButton
      inputId="ingredient5"
      name="ownClinic"
      value={false}
      checked={formik.values.ownClinic === false}
      onChange={formik.handleChange}
    />
    <span className="ml-2">No</span>
  </div>
</div>
                </div>

                {

formik.values.ownClinic === true && <div className="col-md-6">
<div className="d-flex ">
  <h1>If you have clinic</h1> <span className="top-p">(Clinic time slot)</span>
</div>
<div className="">
<MultiSelect
className="login-input-Speciality"
name="clinicTimeSlot"
value={formik.values?.clinicTimeSlot}
options={slot}
onChange={(e) => formik.setFieldValue("clinicTimeSlot", e.value)}
placeholder="Select Clinic Timing"
/>
</div>

</div>
                }
                
              </div>

     {

formik.values.ownClinic === true &&    <div className="row mt-4">
<div className="col-md-6">
  <div className="d-flex">
  <h1>Clinic Address </h1><span className="top-p">(if you have personal clinic)</span>
  </div>

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
     }      

           
  
              <div className="mt-4 row">
              <div className="col-md-6">
              <h1>Preferred Specialities</h1>
        <MultiSelect
        className="login-input-Speciality"
        name="preferredSpecialities"
        value={formik.values.preferredSpecialities} 
        options={specialties?.map((spec) => ({
          label: spec.specialties_name,
          value: spec.id,
        }))}
        onChange={(e) => formik.setFieldValue("preferredSpecialities", e.value)}
        placeholder="Select specialties"
      />
      </div>
      <div className="col-md-6">
              <h1> Specified category</h1>
        <MultiSelect
        className="login-input-Speciality"
        name="category_name"
        value={formik.values?.category_name}
        options={category?.map((spec) => ({
          label: spec.category_name,
          value: spec.id,
        }))}
        onChange={(e) => formik.setFieldValue("category_name", e.value)}
        placeholder="Select Title"
      />
      </div>
   
    </div>
  
          
              <div className=" mt-4 profile-form">
                <div className="col-md-6 ">
                  <h1>Do you Visit Any Hospital?</h1>
                  <div className="d-flex">
  <div className="tuple d-flex">
    <RadioButton
      inputId="ingredient4"
      name="ownClinic"
      value={true}
      checked={formik.values.ownHospital === true}
      onChange={(e) => {
        formik.setFieldValue("ownHospital", true); 
      }}
    />
    <span htmlFor="ingredient4" className="ml-2">
      Yes
    </span>
  </div>

  <div className="tuple d-flex">
    <RadioButton
      inputId="ingredient5"
      name="ownClinic"
      value={false}
      checked={formik.values.ownHospital === false}
      onChange={(e) => {
        formik.setFieldValue("ownHospital", false); 
      }}
    />
    <span className="ml-2">No</span>
  </div>
</div>
                </div>
              {

formik.values.ownHospital === true &&  <div className="col-md-6">
<div className="d-flex ">
  <h1>If you have hospital</h1> <span className="top-p">(hospital time slot)</span>
</div>
<div className="">
<MultiSelect
className="login-input-Speciality"
name="visitHospitalSlot"
value={formik.values?.visitHospitalSlot}
options={slot}
onChange={(e) => formik.setFieldValue("visitHospitalSlot", e.value)}
placeholder="Select Hospital Timing"
/>
</div>

</div>
              }
               

              </div>
{
  formik.values.ownHospital === true && <div className="row">
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
      name="hospitalName"
      value={formik.values?.hospitalName}
      onChange={formik.handleChange}
      placeholder="Hospital Name "
    />
  </div>
  </div>
}
              
             
              {/* <div className="mt-4 d-flex">
                <Checkbox
                  onChange={(e) => setChecked(e.checked)}
                  checked={checked}
                  className="mr"
                ></Checkbox>
                Send me useful monthly newsletters, alerts, and tips on applying
                for jobs!
              </div> */}
  
              <div className="mt-4 ">
               
              </div>
              <div className="mt-4">
                <button className="reg-btn" type="submit" >APPLY CHANGES </button>
              </div>
              {/* <div className="mt-4">
                <p>
                  By creating an account, you agree to our
                  <span  onClick={() => (window.location.href = "/privacy")}> Terms of Use</span>{" "}
                </p>
              </div> */}
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
