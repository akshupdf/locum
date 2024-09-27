import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "./pagination";
import hand from '../../assets/hand.png'

const SearchTablev2 = ({ data: filteredData  , allUsers ,specialties}) => {
  const navigate = useNavigate();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5; // Change this to show more users per page

  const data = (filteredData?.length ? filteredData : allUsers)?.map((user) => ({
    name: `${user.first_name} ${user.last_name}`,
    id: user.custom_id,
    medical: user.medical_id,
    shift: user.availability,
    location: user.location,
    clinicShift: user.hospital_name,
    preferred_specialities: user.preferred_specialities,
    profile_image: user.profile_image
  })) || [];


  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = data.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleProfileClick = (userId) => {
    navigate(`/profile/${userId}`);
  };

  const location2 = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [location2]);

  const path = window.location.pathname;
  const specialty = path.split("/").pop();

  return (
  
 
    <div className="search-exp-table">
          <div className="list-head d-flex justify-content-between">
                        <div>
                            <div className="list-name">
                                List of{" "}
                                {specialty?.charAt(0).toUpperCase() + specialty?.slice(1)}{" "}
                                doctors
                            </div>
                            <div className="list-white">    {filteredData?.length === 0
    ? `0 available doctors`
    : filteredData?.length 
      ? `${filteredData.length} available doctors`
      : `${allUsers.length} available doctors`}</div>
                        </div>
                        <div
                            className="list-btn-search"
                            onClick={() => (window.location.href = "/register")}
                        >
                            Register now
                        </div>
                    </div>

                    {filteredData && filteredData.length === 0 ? (
      <p className="locume-p" style={{marginLeft : "70px"}}>No data found</p>
    ) : (
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Shift</th>
            <th>Medical Id</th>
            <th>Location</th>
            <th>Hospital Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td className="name-column">
                <img
                  src={user.profile_image || "default-avatar.png"}
                  alt={user.name}
                  className="profile-image"
                />
                <div>
                  <strong>{user.name || "Not Available"}</strong>
                  <div className="specialities">
                  {  specialties &&
  specialties
    .filter(spec => user?.preferred_specialities?.includes(spec.id))
    .map(spec => (
      <h3 key={spec.id}>{spec.specialties_name}</h3>
    ))
}
                  </div>
                </div>
              </td>
              <td>{user.shift ? user.shift.join(", ") : "Not Available"}</td>
              <td>{user.medical || "Not Available"}</td>
              <td>{user.location || "Not Available"}</td>
              <td>{user.hospital || "Not Available"}</td>
              <td>
                <button
                  onClick={() => handleProfileClick(user.id)}
                  className="action-btn"
                >
                  →
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={data.length}
        paginate={paginate}
        currentPage={currentPage}
      />

<div className="join-box-main-table">
                <div className="circle"></div>
                <div className="join-box">
                    <div className="join-box-left">
                        <h2>Join our talent</h2>
                        <h2>community.</h2>
                        <p>
                            Join our global talent community to receive alerts when new
                            life-changing opportunities become available.
                        </p>
                        <button
                            className="signup-btn"
                            onClick={() => (window.location.href = "/signin")
                            }
                        >
                            {" "}
                            Sign In
                        </button>
                    </div> 
                    <div className="join-box-right">
                        <img
                            src={hand}
                            alt="hand"
                        ></img>
                    </div>
                </div>
            </div>
    </div> 
   
  );
};

export default SearchTablev2;
