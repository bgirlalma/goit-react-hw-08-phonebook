import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const axiosInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/', 
});

const setUserHeader = token => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

  // получание списка контактов
export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
      try {
        const res = await axiosInstance.get('/contacts');
        setUserHeader(res.data.token);
        console.log(res.data)
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue({ errorMessage: error.message });
      }
    }
  );

  // Добавление новіх контактов
  export const addContact = createAsyncThunk('contacts/addContact', async (newContactData, thunkAPI) => {
    try {
     const res = await axiosInstance.post('/contacts', newContactData);
     setUserHeader(res.data.token);
     console.log(res.data)
     return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ errorMessage: error.message });
    }
  });

// Удаление контактов
  export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
    try {
      const res = await axiosInstance.delete(`/contacts/${contactId}`);
      console.log(res.data)
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ errorMessage: error.message });
    }
  })

  // Update contacts
  export const UpdateContacts = createAsyncThunk('contacts/UpdateContacts', async ({ contactId, updatedData }, thunkAPI) => {
    try {
      const res = await axiosInstance.patch(`/contacts/${contactId}`, updatedData);
      setUserHeader(res.data.token);
      console.log(res.data)
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ errorMessage: error.message });
    }
  })
