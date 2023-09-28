import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
import { contactsReducer } from './contactsSlice';
import { filterReduсer } from './filterSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    dataContacts: contactsReducer,
    filters: filterReduсer,
  }
});