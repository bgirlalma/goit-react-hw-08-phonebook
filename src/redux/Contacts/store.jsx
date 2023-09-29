import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReduсer } from './filterSlice';
import { userReducer } from 'redux/User/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    dataContacts: contactsReducer,
    filters: filterReduсer,
  }
});