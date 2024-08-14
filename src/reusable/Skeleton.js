import React from "react";
import profile from "../assets/profile.png";
import { Leafimg, Stars } from "../reusable/Icons";
import { RadioButton } from "primereact/radiobutton";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';



const SkeletonLoader = () => {
    
    
    return (
    <div className="profile">

      <div className='skeleton'>
    
          <div className="d-flex">
    
      
            <div className="profile-left">
              <div className="logo-box">
              <Skeleton  />
              </div>
    
              <div className="name-box">
                <h3> <Skeleton /></h3>
                <div className="name-text-box">
                  {" "}
                  <p> <Skeleton /> </p>
                
                </div>
    
                <h3> <Skeleton /></h3>
                <div className="name-text-box">
                  <p> <Skeleton /></p>
        
                </div>
    
                <h3> <Skeleton /></h3>
                <div className="name-text-box">
                  <p> <Skeleton /></p>
        
                </div>
    
                <h3> <Skeleton /></h3>
                <div className="name-text-box">
                  <p> <Skeleton /></p>
         
                </div>
    
                <h3> <Skeleton /></h3>
                <p> <Skeleton /></p>
              </div>
    
              <div className="about-box">
                <div className="head">
                  <h1> <Skeleton /></h1>
             
                </div>
                <p>
                <Skeleton count={3} />
                </p>
              </div>
            </div>
            <div className="profile-right">
              {/* <div className="detail-box">
                <div className="detail-text-box">
                <Skeleton  />
                </div>
                <div>
                  <Stars />
                </div>
              </div> */}
    
              {/* <div className="available-box">
                <div className="d-flex">
                  {" "}
                  <h1>Your Availability </h1>
                  <p>(Available time slot)</p>{" "}
                </div>
                <div className="">
                  <div className=" d-flex">
                   
                      <div className="d-flex align-items-center cols-md-3 btn">
                        <RadioButton
                          inputId="ingredient4"
                        />
                        <p htmlFor="ingredient4" className="ml-2">
                          10.00-12.00
                        </p>
                      </div>
               
                  </div>
                </div>
    
                <div className="row mt-4">
                  <div className="col-md-4 ">
                    <h1>Specialization</h1>
                    <InputText
                      className=" login-input"
                      value="Heart Specialist"
                      name="Specialization"
                      placeholder="Specialization"
                    />
                  </div>
                  <div className="col-md-4">
                    <h1>Rate/Hourly </h1>
                    <InputText
                      className=" login-input"
                      value="5000"
                      name="Rate/Hourly "
                      placeholder="Rate/Hourly "
                    />
                  </div>
                  <div className="col-md-4">
                    <h1>Total Experience</h1>
                    <div className="d-flex">
                      <InputText
                        className=" login-input"
                        name="Total experience"
                        placeholder="Total experience"
                      />
    
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
                  <div className="">
                    <h1>Do you have your own clinic</h1>
                    <div className="d-flex align-items-center ">
                      <div className="btn d-flex">
                        <RadioButton
                          inputId="ingredient4"
                          name="clinic"
                          value={true}
                        />
                        <p htmlFor="ingredient4" className="ml-2">
                          Yes
                        </p>
                      </div>
                      <div className="btn  d-flex">
                        <RadioButton
                          inputId="ingredient4"
                          name="clinic"
                          value={false}
                                               />
                        <p htmlFor="ingredient4" className="ml-2">
                          No
                        </p>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="ml">
                    <div className="d-flex ">
                      <h1>If do you have clinic</h1> <p>(Clinic time slot)</p>
                    </div>
    
                    <div className="d-flex  ">
                      <div className="btn d-flex">
                        <RadioButton inputId="ingredient4" name="Clinic time" value={true}  />
                        <p htmlFor="ingredient4" className="ml-2">
                          Yes
                        </p>
                      </div>
    
                      <div className="btn d-flex">
                        <RadioButton
                          inputId="ingredient4"
                          name="Clinic time"
                          value={false}
                        />
                        <p className="ml-2">No</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-4">
                    <h1>Clinic Location</h1>
                    <InputText
                      className=" login-input"
                      name="Location"
                      placeholder="Clinic location"
                    />
                  </div>
                  <div className="col-md-8">
                    <h1>Ideal number of shifts per month </h1>
                    <InputText
                      className=" login-input"
                      name="shifts"
                      placeholder="No. of shifts "
                    />
                  </div>
                </div>
    
                <div className=" mt-4">
                  <h1>Preferred Specialities</h1>
             
                    return <button className="btn">Heart</button>;
               
                </div>
    
                <div className=" mt-4">
                  <h1>Medical ID</h1>
    
                  <InputText
                    className=" login-input"
                    name="MedicalID"
                    placeholder="Add Medical ID (ex. 1234567890)"
                  />
                </div>
                <div className=" mt-4">
                  <h1>Mobile Number</h1>
    
                  <InputText
                    className=" login-input"
                    name="MobileNo"
                    placeholder="+91 1234567891"
                  />
                </div>
                <div className=" mt-4 d-flex">
                  <div className="">
                    <h1>Do you Visit Any Hospital?</h1>
                    <div className="d-flex align-items-center ">
                      <div className="btn d-flex">
                        <RadioButton
                          inputId="ingredient4"
                          name="Hospital visit"
                          value={true}
                         
                        />
                        <p htmlFor="ingredient4" className="ml-2">
                          Yes
                        </p>
                      </div>
                      <div className="btn  d-flex">
                        <RadioButton
                          inputId="ingredient4"
                           name="Hospital visit"
                           value={false}
                      
                        />
                        <p htmlFor="ingredient4" className="ml-2">
                          No
                        </p>{" "}
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
                        <RadioButton inputId="ingredient4"  name="Hospital time" value={true}  />
                        <p htmlFor="ingredient4" className="ml-2">
                          Yes
                        </p>
                      </div>
    
                      <div className="btn d-flex">
                        <RadioButton
                          inputId="ingredient4"
                          name="Hospital time "
                          value={false}
                       
                       
                        />
                        <p className="ml-2">No</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 mt-4">
                  <div className="d-flex">
                    <h1>Hospital Location</h1>
                    <p>(if you have personal clinic)</p>
                  </div>
                  <InputText
                    className=" login-input"
                    name="cliniclocation"
                    placeholder="Clinic location"
                  />
                </div>
    
                <div className="mt-4 d-flex">
                  <Checkbox
            
                    className="mr"
                  ></Checkbox>
                  Send me useful monthly newsletters, alerts, and tips on applying
                  for jobs!
                </div>
    
                <div className="mt-4 ">
                  <h1>Are you a robot?*</h1>
                  <div className="robo-box d-flex">
                    <Checkbox
                     
                      checked="true"
                      className="mr"
                    ></Checkbox>
                    <p>I'm not a robot</p>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="reg-btn" >REGISTER </button>
                </div>
                <div className="mt-4">
                  <p>
                    By creating an account, you agree to our
                    <span> Terms of Use</span>{" "}
                  </p>
                </div>
              </div> */}

              <Skeleton count={20}/>
            </div>
          </div>
    
          <div className="text-box">
            <h1>Communication preferences</h1>
            <p>
              Medrecruit and our partner Medworld will occasionally email you about
              news and opportunities we think you'll be interested in Your profile
              is currently being created, please check back in 15-30 minutes if you
              would like to update your communication preferences. In the meantime,
              let's get a running start on the next step in your career and <span>upload
              your CV. </span>
            </p>
            <h1>Deactivate your account</h1>
            <p>
              Deactivating your account will remove you from all alerts and mailing
              lists immediately and deleted in accordance with our{" "}
              <span>PrivacyPolicy</span> . A member of our team will then be in
              touch To finalise the deactivation of your account.
            </p>
    
            <button>Deactivate your account</button>
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
    {/* <div className="skeleton">

Loading.....
      </div> */}

        </div>
        
    )
}

export default SkeletonLoader;