import { createSlice } from '@reduxjs/toolkit';
import { userRegistration } from './userApi';
const initialState = {
    user: {
      name: null,
      email: null,
      password: null,
      token: null,
      isLoggIn: false,
      isRefreshing: false,
      isLoader: false,
    },
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
        })
        // .addCase(userInfo.rejected, (state, action) => {
        //     state.user.isLoading = false;
        //     state.user.error = action.payload;
        //   })
        // .addCase(userLogIn.fulfilled, (state, action) => {
        //   state.user.isLoading = false;
        //   state.user.error = null;
        //   state.user.contacts = action.payload; 
        // })
        // .addCase(userLogIn.fulfilled, (state, action) => {
        //   const idToDelete = action.payload.id;
        //   state.contacts.items = state.contacts.items.filter(contact => contact.id !== idToDelete);
        // })
      
    }
  });
  
    export const userReducer = userSlice.reducer;