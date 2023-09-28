import { createSlice } from '@reduxjs/toolkit';
import { userInfo, userLogIn } from './userApi';
const initialState = {
    user: {
      name: "",
      email: "",
      password: "",
      isLoading: true,
    },
  };

  const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
      builder
        .addCase(userInfo.pending, (state) => {
          state.user.isLoading = true;
        })
        .addCase(userInfo.fulfilled, (state, action) => {
          state.user.isLoading = false;
          state.user.error = null;
          state.user.contacts = action.payload; 
        })
        .addCase(userInfo.rejected, (state, action) => {
            state.user.isLoading = false;
            state.user.error = action.payload;
          })
        .addCase(userLogIn.fulfilled, (state, action) => {
          state.user.isLoading = false;
          state.user.error = null;
          state.user.contacts = action.payload; 
        })
        // .addCase(userLogIn.fulfilled, (state, action) => {
        //   const idToDelete = action.payload.id;
        //   state.contacts.items = state.contacts.items.filter(contact => contact.id !== idToDelete);
        // })
      
    }
  });
  
    export const userReducer = userSlice.reducer;