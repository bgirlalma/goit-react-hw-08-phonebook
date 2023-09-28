import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const authorizationMovies = {
  headers: {
  Authorization: `Bearer`,
  }} 

    // Получает информацию о пользователе
    export const userInfo = createAsyncThunk('user/userInfo', async (_, thunkAPI) => {
      try {
        const res = await axios.get('/users/current');
        console.log(res.data)
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    })


  // Авторизация пользователя
  export const userLogIn = createAsyncThunk('user/userLogIn', async (_, thunkAPI) => {
    try {
      const res = await axios.post('/users/login');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  })

  // Регистрация пользователя
  export const userRegistration = createAsyncThunk('user/registration', async (newUser, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', newUser);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  })
 
// Выходим из системы
export const userLoginOut = createAsyncThunk('user/userLoginOut', async (_, thunkAPI) => {
  try {
    const res = await axios.post('/users/logout');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
})

  // получание списка контактов
export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
      try {
        const res = await axios.get('/contacts' , authorizationMovies);
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
