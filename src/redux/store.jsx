import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReduсer } from './filterSlice';

export const store = configureStore({
  reducer: {
    dataContacts: contactsReducer,
    filters: filterReduсer,
  }
});