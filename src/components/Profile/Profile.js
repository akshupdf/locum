import React, { useEffect, useState } from "react";
import profile from "../../assets/profile.png";
import { Leafimg, Stars } from "../../reusable/Icons";
import { RadioButton } from "primereact/radiobutton";
import { InputText } from "primereact/inputtext";
import { useDispatch, useSelector } from "react-redux";
import {  fetchUserWithToken } from "../../redux/apiSlice";
import { useParams } from "react-router-dom";
import SkeletonLoader from "../../reusable/Skeleton";
import jsPDF from 'jspdf';

const selectUserInfov2 = (state) => state.user.userInfov2;

export const Profile = () => {

  const { id } = useParams();

  const userid = localStorage.getItem("userId")
  const dispatch = useDispatch();


  const [timeSlot, setTimeSlot] = useState("");

  const [isLoading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const user = useSelector(selectUserInfov2);
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);

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
  }, [id,dispatch]);

  if (isLoading) {
    return <SkeletonLoader />;
  }

  const data = user[0]

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Resume', 14, 16);

    doc.text(`First Name: ${data?.first_name}`, 14, 24);
    doc.text(`Last Name: ${data?.last_name}`, 14, 32);
    doc.text(`Email: ${data?.email}`, 14, 40);
    doc.text(`Phone Number: ${data?.mobile_number}`, 14, 48);
    doc.text(`Location: ${data?.location}`, 14, 56);
    doc.text(`Medical ID: ${data?.medical_id}`, 14, 64);
    
    if (data?.about) {
      doc.text(`About ${data?.first_name}: ${data?.about}`, 14, 72);
    }

    if (data?.availability) {
      doc.text('Availability:', 14, 80);
      data.availability.forEach((slot, index) => {
        doc.text(`- ${slot}`, 14, 88 + (index * 8));
      });
    }

    doc.text(`Rate/Hourly: ${data?.hourly_rate}`, 14, 100);
    doc.text(`Total Experience: ${data?.otp_verification_id}`, 14, 108);
    
    if (data?.clinic) {
      doc.text(`Do you have your own clinic: ${data?.clinic}`, 14, 116);
    }

    if (data?.timeSlot) {
      doc.text('Clinic Time Slot:', 14, 124);
      data.timeSlot.forEach((timeSlot, index) => {
        doc.text(`- ${timeSlot}`, 14, 132 + (index * 8));
      });
    }

    if (data?.clinic_name) {
      doc.text(`Clinic Name: ${data?.clinic_name}`, 14, 140);
    }

    if (data?.clinic_location) {
      doc.text(`Clinic Location: ${data?.clinic_location}`, 14, 148);
    }

    if (data.specialties) {
      doc.text('Specialties:', 14, 156);
      data.specialties.forEach((specialty, index) => {
        doc.text(`- ${specialty}`, 14, 164 + (index * 8));
      });
    }

    if (data?.hospital_name) {
      doc.text(`Hospital Name: ${data?.hospital_name}`, 14, 180);
    }

    if (data?.hospital_location) {
      doc.text(`Hospital Location: ${data?.hospital_location}`, 14, 188);
    }

    doc.save('resume.pdf');
  };

  return (
    <div className="profile">
    {
    user?.map((data) =>{
  
  return (
  
    <div>
  
        <div className="profile-box d-flex">
  
    
          <div className="profile-left">
            <div className="tab-box">
            <div className="logo-box">
              <img src={profile} alt="profile"></img>
          {

userid === id && <button className="btn" onClick={ window.location.href = `/profilev2/${id}`}>  </button>
          }
              
            </div>
  
            <div className="name-box">
            <h3>First Name</h3>
              <div className="name-text-box">
              <p>{data?.first_name}{" "}{data?.last_name}</p>
            </div>
  {
data?.email && 
  <div>
 <h3>Email</h3>
              <div className="name-text-box">
                <p>{data?.email}</p>     
              </div>
  </div>

  }    
  
              <h3>Phone Number</h3>
              <div className="name-text-box">
                <p>{data?.mobile_number}</p>
              
              
              </div>
  
              <h3>Location</h3>
              <div className="name-text-box">
                <p>{data?.location}</p>
        
              </div>
  
              <h3>Medical ID</h3>
              <p>{data?.medical_id}</p>
            </div>
    </div>

    {data?.about  && <div className="about-box">
              <div className="head">
                <h1>About {data?.first_name}</h1>
               
              </div>
              <p>
              {data?.about}
              </p>
            </div>
    
    
    
    }
            
          </div>

          <div className="profile-right">
            <div className="detail-main-box">
            <div className="detail-box">
              <div className="detail-text-box">
                <h2>Professional Details</h2>
            
              </div>
              <div>
                <Stars />
              </div>
            </div>
            <div className="detail-box2">
              <div className="detail-text-box">
              <img width="50" height="50" src="https://img.icons8.com/ios/50/downloading-updates.png" alt="downloading-updates"/>
               <button className="dwn-btn" onClick={generatePDF}> Download Resume</button>
            
              </div>
             
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
                  {data.availability?.map((slot , index) => (
                    <div key={index} className="d-flex align-items-center cols-md-3 ">
                    <p className="ml-2 tuple">
                      {slot}
                    </p>
                  </div>
                  ))}
                </div>
              </div>
  
              <div className="row mt-4">
          
                <div className="col-md-4 ">
                  <h1>Rate/Hourly </h1>

                  <p className="">{data?.hourly_rate}</p>
               
                </div>
                <div className="col-md-4">
                  <h1>Total Experience</h1>
                  <div className="d-flex">
                  <p className="">{data?.otp_verification_id}</p>
  
                    <span>
                      <svg
                        width="27"
                        height="30"
                        viewBox="0 0 27 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M14.7949 5H12.7949C10.9093 5 9.96649 5 9.38071 5.58579C8.79492 6.17157 8.79492 7.11438 8.79492 9V11V12.5H18.7949V11V9C18.7949 7.11438 18.7949 6.17157 18.2091 5.58579C17.6233 5 16.6805 5 14.7949 5Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.2304 8.78311C14.3352 8.29495 13.2533 8.29495 12.358 8.78311L7.56381 11.3973C6.59982 11.9229 6 12.9332 6 14.0312V18.9688C6 20.0668 6.59982 21.0771 7.56381 21.6027L12.358 24.2169C13.2533 24.705 14.3352 24.705 15.2304 24.2169L20.0246 21.6027C20.9886 21.0771 21.5885 20.0668 21.5885 18.9688V14.0312C21.5885 12.9332 20.9886 11.9229 20.0246 11.3973L15.2304 8.78311ZM13.7944 13.5C13.5104 13.5 13.3204 13.8408 12.9404 14.5225L12.8421 14.6989C12.7341 14.8926 12.6801 14.9894 12.5959 15.0533C12.5117 15.1172 12.4069 15.141 12.1972 15.1884L12.0063 15.2316C11.2684 15.3986 10.8994 15.482 10.8117 15.7643C10.7239 16.0466 10.9754 16.3407 11.4785 16.929L11.6086 17.0812C11.7516 17.2483 11.823 17.3319 11.8552 17.4353C11.8873 17.5387 11.8765 17.6502 11.8549 17.8733L11.8353 18.0763C11.7592 18.8612 11.7212 19.2536 11.951 19.4281C12.1808 19.6025 12.5262 19.4435 13.2171 19.1254L13.3959 19.0431C13.5922 18.9527 13.6904 18.9075 13.7944 18.9075C13.8985 18.9075 13.9967 18.9527 14.193 19.0431L14.3717 19.1254C15.0626 19.4435 15.4081 19.6025 15.6379 19.4281C15.8677 19.2536 15.8297 18.8612 15.7536 18.0763L15.7339 17.8733C15.7123 17.6502 15.7015 17.5387 15.7337 17.4353C15.7658 17.3319 15.8373 17.2483 15.9802 17.0812L16.1104 16.929C16.6135 16.3407 16.865 16.0466 16.7772 15.7643C16.6894 15.482 16.3205 15.3986 15.5826 15.2316L15.3917 15.1884C15.182 15.141 15.0771 15.1172 14.993 15.0533C14.9088 14.9894 14.8548 14.8926 14.7468 14.6989L14.6485 14.5225C14.2685 13.8408 14.0785 13.5 13.7944 13.5Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
  
              <div className=" mt-4 d-flex">

                {
                        data?.clinic && <div className="">
                        <h1>Do you have your own clinic</h1>
                        <p className="">{data?.hourly_rate}</p>
                      </div>
                }
                

                {
                   data?.timeSlot &&    <div className="ml">
                   <div className="d-flex ">
                     <h1>If do you have clinic</h1> <p>(Clinic time slot)</p>
                     {
                     data.timeSlot?.map((data) => (
                     <div className="d-flex align-items-center cols-md-3 btn">
                       <RadioButton
                         inputId="ingredient4"
                         name={data}
                         value={data}
                         checked={data === timeSlot}
                       />
                       <p htmlFor="ingredient4" className="ml-2">
                         {data}
                       </p>
                     </div>
                   ))}
                   </div>
   
                 </div>
                }
              


              </div>
              <div className="row mt-4">
                <div className="col-md-4">
                  <h1>Clinic Name</h1>
                  <p className="">{data?.clinic_name}</p> 
                </div>
                <div className="col-md-4">
                  <h1>Clinic Location </h1>
                  <p className="">{data?.clinic_location}</p> 
                </div>
              </div>
  
              <div className="mt-4">
      {data.specialties?.map((specialty, index) => (
        <button
          key={index}
          className={`btn ${selectedSpecialties.includes(specialty) ? 'selected' : ''}`}
        >
          <p> {specialty} </p> 
        </button>
      ))}
    </div>
  
              <div className="row mt-4">
                <div className="col-md-4">
                  <h1>Hospital Name</h1>
                  <p className="">{data?.hospital_name}</p> 
                </div>
                <div className="col-md-4">
                  <h1>Hospital Location </h1>
                  <p className="">{data?.hospital_location}</p> 
                </div>
              </div>
  
           
  
              <div className="mt-4 ">
                
              </div>
          
            </div>
          </div>
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
            
            
          )}) 
          
          
          } 
    
    </div>
  );
};
