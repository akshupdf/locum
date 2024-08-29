import React from "react";
import team from "../../assets/team.png";
import { Dropdown } from "primereact/dropdown";
import { Ambulancev2, Behavioral, Emergency, ExitIcon, ExpBehaviour, ExpDog, ExpNephrology, ExpPhysiatry, ExpPsychology, ExpRheumatology, Gastroenterology, HandNBrain, HeartBeat, Nephrology, Neurology, Nurse, Oncology, Ophthalmology, Otolaryngology, Physiatry, Primary, Psychology, Radiationv2, Radiology, Radiologyv2, Rheumatology, Saline, Surgeryv2, Urology } from "../../reusable/Icons";
import { Link } from "react-router-dom";

export const Explore = () => {
  const specialties = [
    "Abdominal Radiology",
    "Abdominal Surgery",
    "Addiction Medicine",
    "Addiction Psychiatry",
    "Adolescent Medicine",
    "Adult Congenital Heart Disease",
    "Adult Reconstructive Orthopedics",
    "Advanced Heart Failure",
    "Aerospace Medicine",
    "Allergy",
    "Allergy/Immunology",
    "Anatomic Pathology",
    "Anatomic/Clinical Pathology",
    "Anesthesiology",
    "Anesthesiology Critical Care Medicine",
    "Behavioral and Cognitive Psychology",
    "Bloodbanking/Transfusion Medicine",
    "Brain Injury Medicine",
    "Burn Surgery",
    "Cardiac Electrophysiology",
    "Cardiothoracic Radiology",
    "Cardiothoracic Surgery",
    "Cardiovascular Diseases",
    "Women's Imaging",
    "Wound Care",
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

  const specialtiesData = [
    { id: 1, name: "Anesthesiology", icon: <Saline />, url: "anesthesiology" },
    { id: 2, name: "Cardiology", icon: <HeartBeat />, url: "cardiology" },
    { id: 3, name: "Clinical Social Work", icon: <HandNBrain />, url: "clinical-social-work" },
    { id: 4, name: "Dermatology", icon: <Nurse />, url: "dermatology" },
    { id: 5, name: "Emergency medicine", icon: <Ambulancev2 />, url: "emergency-medicine" },
    { id: 6, name: "Endocrinology", icon: <Radiology />, url: "endocrinology" },
    { id: 7, name: "Gastroenterology", icon: <Gastroenterology />, url: "gastroenterology" },
    { id: 8, name: "Hospital medicine", icon: <Emergency />, url: "hospital-medicine" },
    { id: 9, name: "Medical oncology", icon: <Oncology />, url: "medical-oncology" },
    { id: 10, name: "Nephrology", icon: <ExpNephrology />, url: "nephrology" },
    { id: 11, name: "Neurology", icon: <Nephrology />, url: "neurology" },
    { id: 12, name: "Women's Health", icon: <Neurology />, url: "womens-health" },
    { id: 13, name: "Ophthalmology", icon: <Ophthalmology />, url: "ophthalmology" },
    { id: 14, name: "Otolaryngology/ENT", icon: <Otolaryngology />, url: "otolaryngology-ent" },
    { id: 15, name: "Primary care", icon: <Primary />, url: "primary-care" },
    { id: 16, name: "Physiatry", icon: <ExpPhysiatry />, url: "physiatry" },
    { id: 17, name: "Behavioral Health", icon: <ExpBehaviour />, url: "behavioral-health" },
    { id: 18, name: "Psychology", icon: <ExpPsychology />, url: "psychology" },
    { id: 19, name: "Radiology", icon: <ExpDog />, url: "radiology" },
    { id: 20, name: "Radiation oncology", icon: <Radiationv2 />, url: "radiation-oncology" },
    { id: 21, name: "Rheumatology", icon: <ExpRheumatology />, url: "rheumatology" },
    { id: 22, name: "Surgery", icon: <Rheumatology />, url: "surgery" },
    { id: 23, name: "Urology", icon: <Urology />, url: "urology" },
  ];

  return (
    <div className="explore-main">
      {/* <div className="explore-search-main-parent">
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
            </div>
            <div>
              <Dropdown
                className="login-input-Speciality"
                name="speciality"
                options={specialties}
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
        <div className="explore-tene">
          <div>
            <div className="find-head">
              {" "}
              Find Locum <span>and</span> Permanent Jobs
            </div>
            <div className="para-exp">
              Connecting qualified clinicians with top healthcare facilities. In
              addition to running this industry-wide, self-service job board,
              LocumTenens.com is a full-service recruitment agency for
              physicians, advanced practitioners, psychologists, and social
              workers.
            </div>
            <button className="reg-exp"  onClick={() => (window.location.href = "/register")}>Register now</button>
          </div>
          <div>
            {" "}
            <img src={team} alt="team" />
          </div>
        </div>
      </div> */}
      <div className="all-doc">
        <div className="head-1">More than a job board</div>
        <div className="head-2">We are a full-service locum’s agency</div>
        <div className="head-3">
          In a complex healthcare market, in an era of increased choice and
          competition, join the team that works for you.
        </div>
        <div className="head-4">
          LocumTenens.com specializes in recruiting physicians, advanced
          practitioners, psychologists, and social workers to work temporary and
          temp-to-perm assignments at healthcare organizations across the U.S.
          We offer both onsite and virtual approaches to mitigating physician
          shortages.
        </div>
        <div className="head-5">
          <button className="b-1" onClick={() => window.location.href = '/search-page'}>View all specialties</button>
          <button className="b-2" onClick={() => window.location.href = '/search-page'}>Find a job</button>
        </div>
      </div>
      <div className="all-opportunities">
        <div className="all-head-1">Explore Locum opportunities</div>
        <div className="all-head-2">
          Provide qualified recruitment especially across India
        </div>
        <div className="specialties-container">
          {specialtiesData.map((specialty) => (
            <div
              key={specialty.id}
              id={`box-${specialty.id}`}
              className="specialty-box"
            >
             <Link to={`/${specialty.url}`} className="specialty-link">
      <div className="specialty-icon">{specialty.icon}</div>
    </Link>
              <div className="specialty-name">{specialty.name}</div>
            </div>
          ))}
        </div>
        <button className="reg-exp"  onClick={() => window.location.href = '/register'}>Register now</button>
      </div>
      <div className="join-box-main">
        <div className="circle"></div>
        <div className="join-box">
          <div className="join-box-left">
            <h2>Join our talent</h2>
            <h2>community.</h2>
            <p>
              Join our global talent community to receive alerts when new
              life-changing opportunities become available.
            </p>
            <button className='signup-btn' onClick={() => window.location.href = '/signin'}> Sign In
            </button>
          </div>
          <div className="join-box-right">
            <img src="https://s3-alpha-sig.figma.com/img/e03b/1f57/be017111c9382d74d73ac1d1b55afa0c?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LqkNy64DZprRoQW~Tw7fpA2s5~-fNegwfY508CBcZ6LHc4DRKbx8Bj0evpQs-s4u~jRTmeIspYgvIoQsddX3ZNtN8EhGXOmwjNwidGmH56SiK5q3AaH1avdG1foOvECiS7Rg~oTLgyMKukmJtut1y3vjMkafXvPJUy0cdoor9s0yj6rQYeolMTpnoS4t1uBGy1ZuPUuQh62-QeNQkY5QI2qgKfwTsqxTNjHck3RWD0nrj4pV3MQ8BGAkmcYzF7BBj7Nq0YgDzZwKwj1oKd~GYW576yVCg7WHtPBZlZ2qg0TVkyS4WRab3QhKkCkpA6K6WJccZqOcJsuKhEjFxLreFQ__" alt="hand"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
