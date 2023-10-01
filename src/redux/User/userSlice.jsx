import { createSlice } from '@reduxjs/toolkit';
import { refreshUser, userLogIn, userLoginOut, userRegistration } from './userApi';
const initialState = {
    user: {name: null, email: null, password: null,},
      token: null,
      isLoggIn: false,
      isRefreshing: false,
      isLoader: false,
    
  };

  const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
      builder
        .addCase(userRegistration.pending, (state) => {
          state.isLoader = true;
        })
        .addCase(userRegistration.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggIn = true;
          state.isLoader = false;
        }).addCase(userLogIn.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggIn = true;
          state.isLoader = false;
        }).addCase(userLoginOut.fulfilled, (state) => {
          state.user = {name: null, email: null, password: null,};
          state.token = null;
          state.isLoggIn = false;
        }).addCase(refreshUser.fulfilled, (state, action) => {
          state.user = action.payload;
          state.isLoggIn = true;
        })
      
      
    }
  });
    export const userReducer = userSlice.reducer;