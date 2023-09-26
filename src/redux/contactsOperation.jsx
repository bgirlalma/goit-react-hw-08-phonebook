import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://6509624af6553137159b52ae.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
      try {
        const response = await axios.get('/contacts');
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const addContact = createAsyncThunk('contacts/addContact', async (newContactData, thunkAPI) => {
    try {
     const res = await axios.post('/contacts', newContactData);
     console.log(res.data)
     return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

  export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${contactId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  })