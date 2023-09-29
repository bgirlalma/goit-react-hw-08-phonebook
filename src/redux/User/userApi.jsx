import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
  
const setUserHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const clearUserHeader = () => {
  axios.defaults.headers.common.Authorization = "";
}
    // Авторизация пользователя
    export const userLogIn = createAsyncThunk('user/userLogIn', async (credentials, thunkAPI) => {
      try {
        const res = await axios.post('/users/login', credentials);
        setUserHeader(res.data.token);
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    })
  
    // Регистрация пользователя
    export const userRegistration = createAsyncThunk('user/registration', async (newUser, thunkAPI) => {
      console.log('New user data:', newUser); 
      try {
        const res = await axios.post('/users/signup', newUser);
        setUserHeader(res.data.token);
        console.log(res.data);
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    })
   
  // Выходим из системы
  export const userLoginOut = createAsyncThunk('user/userLoginOut', async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearUserHeader()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  })