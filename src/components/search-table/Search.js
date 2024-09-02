import React, { useState } from 'react'
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";



export const Search = () => {

    const [availability, setAvailability] = useState([]);


    const specialties = [
        "Anesthesiology",
        "Cardiology",
        "Clinical Social Work",
        "Dermatology",
        "Emergency medicine",
        "Endocrinology",
        "Gastroenterology",
        "Hospital medicine",
        "Medical oncology",
        "Nephrology",
        "Neurology",
        "Women's Health",
        "Ophthalmology",
        "Otolaryngology/ENT",
        "Primary care",
        "Physiatry",
        "Behavioral Health",
        "Psychology",
        "Radiology",
        "Radiation oncology",
        "Rheumatology",
        "Surgery",
        "Urology"
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
    ];

    const handleAvailabilityChange = (e) => {
        setAvailability(e.value); 
    };


  return(
   <div className="explore-search-main-parent-table">

<div className="search-box">
                    <div className="quick">Quick Locum search</div>
                    <div className="drop-search">
                        <div>
                            <Dropdown
                                className="login-input"
                                name="title"
                                options={title}
                                placeholder="Category"
                            />
                                 {/* <MultiSelect
                className="login-input-Speciality"
                name="availability"
                value={title}
                options={specialties}
                onChange={handleAvailabilityChange}
                placeholder="Speciality..."
              /> */}
                        </div>
                        <div>
                          
                             <MultiSelect
                className="login-input-Speciality"
                name="availability"
                value={availability}
                options={specialties}
                onChange={handleAvailabilityChange}
                placeholder="Speciality..."
              />
                            
                        </div>
                        <div>
                            <Dropdown
                                className="login-input-Speciality"
                                name="speciality"
                                options={location}
                                placeholder="Location..."
                            />
                        </div>
                        <div className="search-fil">Search</div>
                    </div>
                </div>
    </div>
   )

 }