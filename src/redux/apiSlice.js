// apiSlice.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addUser = createAsyncThunk(
  'user/addUser',
  async (values, thunkAPI) => {
    try {
      const response = await axios.post('https://19u1szcoq1.execute-api.ap-south-1.amazonaws.com/api/users/addUsers', values);
      return response;
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (values, thunkAPI) => {
    try {
      const token = localStorage.getItem('jwtToken');

      const response = await axios.put('https://19u1szcoq1.execute-api.ap-south-1.amazonaws.com/api/users/editProfile', values ,
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );
      return response;
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const generateOtp = createAsyncThunk(
  'otp/generateOtp',
  async (values, thunkAPI) => {

    try {

      const response = await axios.post('https://19u1szcoq1.execute-api.ap-south-1.amazonaws.com/api/users/generateOtp', 
        values
      );
     
      return response.data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message || error.message);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  'otp/verifyOtp',
  async ({ mobileNumber, otp }, thunkAPI) => {
    try {
      const response = await axios.post('https://19u1szcoq1.execute-api.ap-south-1.amazonaws.com/api/users/verifyOtp', {
        mobileNumber,
        otp
      });
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message || error.message);
    }
  }
);

export const getUserLogin = createAsyncThunk(
  'user/userLogin',
  async ({ mobileNumber, otp }, thunkAPI) => {
    try {
      const response = await axios.post('https://19u1szcoq1.execute-api.ap-south-1.amazonaws.com/api/users/userLogin', {
        mobileNumber,
        otp
      });
      localStorage.setItem('jwtToken', response.data.token);
      localStorage.setItem('userId', response.data?.user.custom_id);
      return response.data.user;
      

    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogout = createAsyncThunk(
  'user/logOut',
  async (thunkAPI) => {
    try {
      localStorage.removeItem('userId');
      localStorage.removeItem('jwtToken');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUserWithToken = createAsyncThunk(
  'user/fetchUserWithId',
  async ( id,thunkAPI) => {
 
    try {
      const response = await axios.get(`https://19u1szcoq1.execute-api.ap-south-1.amazonaws.com/api/users/getSingleUserById/${id}`
     );
      return response.data.result;

    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllDoctors = createAsyncThunk(
  'user/getAllDoctors',
  async ( thunkAPI) => {
    try {
      const response = await axios.get('https://19u1szcoq1.execute-api.ap-south-1.amazonaws.com/api/users/getAllDoctors');
      return response.data.result;
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)
