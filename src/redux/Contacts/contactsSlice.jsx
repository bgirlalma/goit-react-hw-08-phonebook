import { createSlice } from '@reduxjs/toolkit';
 import { deleteContact, fetchContacts } from "./contactsOperation";
 import { addContact } from './contactsOperation';

 const initialState = {
  contacts: {
    name: [],
    number: [],
  },
  isLoading: false,
  error: null,
  filter: '',
};
 
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        console.log('Fetching contacts...');
        state.contacts.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        console.log('Contacts fetched successfully:', action.payload);
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts = action.payload; 
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items.push(action.payload); 
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const idToDelete = action.payload.id;
        state.contacts.items = state.contacts.items.filter(contact => contact.id !== idToDelete);
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        console.error('Error fetching contacts:', action.payload);
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
  }
});

  export const contactsReducer = contactsSlice.reducer;