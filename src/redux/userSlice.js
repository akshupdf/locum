// userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { addUser, generateOtp, verifyOtp , getUserLogin, fetchUserWithToken, getAllDoctors, updateUser, filteredUser, getCategory, getSpecialties } from './apiSlice';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    otp: null,
    loading: false,
    error: null,
    verifyOtpError: null,
    mobileVerficationId: null,
    userInfo: null,
    userInfov2: null,
    allUsers: null,
    specialties:null,
    category:null,
    UserFiltered:null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(generateOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.otp = action.payload;
      })
      .addCase(generateOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state,action) => {
        state.loading = false;
        state.mobileVerficationId = action.payload;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.verifyOtpError = action.payload;
      })
      .addCase(getUserLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserLogin.fulfilled, (state,action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(getUserLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserWithToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserWithToken.fulfilled, (state,action) => {
        state.loading = false;
        state.userInfov2 = action.payload;
      })
      .addCase(fetchUserWithToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAllDoctors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllDoctors.fulfilled, (state,action) => {
        state.loading = false;
        state.allUsers = action.payload;
      })
      .addCase(getAllDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state,action) => {
        state.loading = false;
        state.allUsers = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(filteredUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(filteredUser.fulfilled, (state,action) => {
        state.loading = false;
        state.UserFiltered = action.payload;
      })
      .addCase(filteredUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategory.fulfilled, (state,action) => {
        state.loading = false;
        state.category = action.payload;
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getSpecialties.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSpecialties.fulfilled, (state,action) => {
        state.loading = false;
        state.specialties = action.payload;
      })
      .addCase(getSpecialties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export default userSlice.reducer;
