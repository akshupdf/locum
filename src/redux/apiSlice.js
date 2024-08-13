// apiSlice.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addUser = createAsyncThunk(
  'user/addUser',
  async (values, thunkAPI) => {
    try {
      const response = await axios.post('http://13.127.236.115:3000/api/users/addUsers', values);
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

      const response = await axios.post('http://13.127.236.115:3000/api/users/generateOtp', 
        values
      );
     
      return response.data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  'otp/verifyOtp',
  async ({ mobileNumber, otp }, thunkAPI) => {
    try {
      const response = await axios.post('http://13.127.236.115:3000/api/users/verifyOtp', {
        mobileNumber,
        otp
      });
      return response.data.result.otpVerficationId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserLogin = createAsyncThunk(
  'user/userLogin',
  async ({ mobileNumber, otp }, thunkAPI) => {
    try {
      const response = await axios.post('http://13.127.236.115:3000/api/users/userLogin', {
        mobileNumber,
        otp
      });
      localStorage.setItem('jwtToken', response.data.token);
      localStorage.setItem('userId', response.data.user.id);
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
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUserWithToken = createAsyncThunk(
  'user/fetchUserWithId',
  async ( id,thunkAPI) => {
 
    try {
      const response = await axios.get(`http://13.127.236.115:3000/api/users/getSingleUserById/${id}`
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
      const response = await axios.get('http://13.127.236.115:3000/api/users/getAllDoctors');
      return response.data.result;
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)
