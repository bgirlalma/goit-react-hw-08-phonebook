import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

  // получание списка контактов
export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
      try {
        const res = await axios.get('/contacts');
        console.log(res.data)
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  // Добавление новіх контактов
  export const addContact = createAsyncThunk('contacts/addContact', async (newContactData, thunkAPI) => {
    try {
     const res = await axios.post('/contacts', newContactData);
     console.log(res.data)
     return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

// Удаление контактов
  export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${contactId}`);
      console.log(res.data)
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  })

  // Update contacts
  export const UpdateContacts = createAsyncThunk('contacts/UpdateContacts', async (contactId, thunkAPI) => {
    try {
      const res = await axios.patch(`/contacts/${contactId}`);
      console.log(res.data)
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  })
