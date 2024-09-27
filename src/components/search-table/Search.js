import React, { useEffect ,useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import { Formik } from "formik";
import { filteredUser } from "../../redux/apiSlice";
import { useDispatch } from "react-redux";

export const Search = ({
  specialties,title
}) => {

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

  const dispatch = useDispatch();

  const path = window.location.pathname;
  const [search, setSearch] = useState(false);

  const specialty = path.split("/").pop();

  useEffect(() => {
    if (specialty) {
      const matchedSpecialty = specialties?.find(
        (spec) => spec.specialties_name.toLowerCase() === specialty.toLowerCase()
      );

      if (matchedSpecialty) {
       
        const filter = {
          specialtyId: [matchedSpecialty.id], 
        };

        dispatch(filteredUser(filter));
      }
    }
  }, [specialty, specialties, dispatch]);



  const handleSubmit = (values) => {
    dispatch(filteredUser(values));
  };

  return (
    <Formik
    initialValues={{
        categoryId: [],
      specialtyId: [],
      location: [],
    }}
    onSubmit={handleSubmit}
  >
    {({ values, setFieldValue, handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div className="explore-search-main-parent-table">
          <div className="search-box">
            <div className="quick"></div>
            <div className="drop-search">
              <div>
                <MultiSelect
                  className="login-input-Speciality"
                  name="title"
                  value={values.categoryId}
                  options={title?.map((spec) => ({
                    label: spec.category_name,
                    value: spec.id,
                  }))}
                  onChange={(e) => setFieldValue("categoryId", e.value)}
                  placeholder="Title..."
                />
              </div>
              <div>
              <MultiSelect
  className="login-input-Speciality"
  name="availability"
  value={values.specialtyId} 
  options={specialties?.map((spec) => ({
    label: spec.specialties_name,
    value: spec.id,
  }))} 
  onChange={(e) => setFieldValue("specialtyId", e.value)} 
  placeholder="Speciality..."
/>
              </div>
              <div>
                <MultiSelect
                  className="login-input-Speciality"
                  name="location"
                  value={values.location}
                  options={location.map((loc) => ({
                    label: loc,
                    value: loc,
                  }))}
                  onChange={(e) => setFieldValue("location", e.value)}
                  placeholder="Location..."
                />
              </div>
              <div className="search-fil">
                <button type="submit">Search</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    )}
  </Formik>
  );
};
