import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Search } from './Search'
import SearchTable from './SearchTable'
import { useDispatch, useSelector } from 'react-redux';
import { filteredUser, getAllDoctors, getCategory, getSpecialties } from '../../redux/apiSlice';
import _ from 'lodash';
import SearchTablev2 from './Tablev2';

export const MainSearch = () => {

  const [titlev2, setTitlev2] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [locationv2, setLocationv2] = useState([]);

  const handleTitleChange = (selectedOptions) => {
    if (Array.isArray(selectedOptions)) {
      setTitlev2(selectedOptions.map(option => option.value)); 
    } else if (selectedOptions) {
      setTitlev2([selectedOptions.value]); 
    } else {
      setTitlev2([]);
    }
  };

  const handleAvailabilityChange = (selectedOptions) => {
    if (Array.isArray(selectedOptions)) {
      setAvailability(selectedOptions.map(option => option.value));
  } else if (selectedOptions) {
    setAvailability([selectedOptions.value]);
  } else {
    setAvailability([]);
  }
  };

  const handleLocationChange = (selectedOptions) => {
    
      if (Array.isArray(selectedOptions)) {
        setLocationv2(selectedOptions.map(option => option.value));
    } else if (selectedOptions) {
      setLocationv2([selectedOptions.value]);
    } else {
      setLocationv2([]);
    }
  };

  const dispatch = useDispatch();

    // Fetch all users
    const { allUsers , specialties , category ,UserFiltered , loading} = useSelector((state) => state.user);

    const specArray = availability.flat(Infinity);
    const titalArray = titlev2.flat(Infinity);

    useEffect(() => {
      if (!allUsers?.length && !loading) {
        dispatch(getAllDoctors());
        dispatch(getSpecialties());
        dispatch(getCategory());
      }
    }, [allUsers, loading, dispatch]);

    const previousLocation = useRef();
    const previousTitalArray = useRef([]);
    const previousSpecArray = useRef([]);

    const arraysEqual = (arr1, arr2) => _.isEqual(arr1, arr2);

 

    useEffect(() => {
      if (
        (locationv2 || titalArray.length || specArray.length) &&
        (locationv2 !== previousLocation.current || 
         !arraysEqual(titalArray, previousTitalArray.current) || 
         !arraysEqual(specArray, previousSpecArray.current))
      ) {
        const filter = {
          location: locationv2,
          categoryId: titalArray,
          specialtyId: specArray,
        };

        dispatch(filteredUser(filter));
  
      
        previousLocation.current = locationv2;
        previousTitalArray.current = titalArray;
        previousSpecArray.current = specArray;
      }
    }, [locationv2, titalArray, specArray, dispatch]);


// useEffect(() => {
//   console.log(UserFiltered);
// }, [UserFiltered]);
    

const memoizedFilteredData = useMemo(() => UserFiltered, [UserFiltered]);


  //   const filteredData = useMemo(() => {
  //     return allUsers?.filter((user) => {
  //         const matchesTitle = titlev2.length === 0 || titlev2.includes(user.title);
  //         const matchesAvailability = availability.length === 0 || availability.includes(user.availability);
  //         const matchesLocation = locationv2.length === 0 || locationv2.includes(user.location);
  //         return matchesTitle && matchesAvailability && matchesLocation;
  //     }) || [];
  // }, [allUsers, titlev2, availability, locationv2]);

  return(
    <>
    
    <div className="explore-search-main-parent-table">
        <Search 
        specialties={specialties}
        title={category}
            titlev2={titlev2}
            availability={availability}
            locationv2={locationv2}
            handleTitleChange={handleTitleChange}
            handleAvailabilityChange={handleAvailabilityChange}
            handleLocationChange={handleLocationChange}
            />
    

    </div>
    <SearchTablev2 data={memoizedFilteredData} allUsers={allUsers}  specialties={specialties}/>
</>
   )

 }