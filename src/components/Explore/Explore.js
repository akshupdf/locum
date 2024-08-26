import React from 'react'
import team from "../../assets/team.png"
import { Dropdown } from "primereact/dropdown";


export const Explore = () => {

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
        "Student"
    ];

    const location = [
        "Mumbai",
        "Delhi",
        "Bengaluru",
        "Kolkata",
        "Chennai",
        "Hyderabad",
        "Pune",
        "Ahmedabad",
        "Jaipur",
        "Lucknow",
        "Kanpur",
        "Nagpur",
        "Indore",
        "Thane",
    ]

  return(
    <div className='explore-main'>
        <div className='search-box'>
        <div>
            <h1>Quick Locum search</h1>
            <Dropdown
                className="login-input"
                name="title"
                options={title}
                 placeholder="Title..."
               
              />
                       <Dropdown

                className="login-input"
                name="speciality"
                options={specialties}
                 placeholder="Speciality..."
               
              />
                  <Dropdown

className="login-input"
name="speciality"
options={location}
 placeholder="Location..."

/>
        </div>
        </div>  
        <div className='explore-tene'>
        <img src={team} alt="team" />
        </div>


    </div>
   )

 }