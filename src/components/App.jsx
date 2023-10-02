import { Route, Routes } from 'react-router-dom';
// import styled from 'styled-components';
import { FilterContacts } from './Filter/filterContacts';
import Layout from './Layout';
import RegisterPages from '../Pages/register';
import LoginPages from '../Pages/login';
import HomePage from '../Pages/homePage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/User/userApi';
import { useAuth } from './hooks/userHook';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { ContactsPages } from './ContactsPages/contactsPages';


// const WrappContainer = styled.div`
// display: grid;
// grid-template-columns: repeat(2, 1fr);
// gap: 20px;
// `;

export const App = () => {
  const dispatch = useDispatch();
  const {isRefreshing} = useAuth()

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? ("Refreshing data..") : (
    <Routes>
      <Route path='/' element={<Layout/>} >
      <Route index element={<HomePage/>}></Route>
      <Route path='login' element={<RestrictedRoute component={LoginPages} redirectTo='/contacts'/>}></Route>
      <Route path='register' element={<RestrictedRoute component={RegisterPages} redirectTo='/contacts'/>}></Route>
      <Route path='contacts' element={<PrivateRoute component={ContactsPages} redirectTo='/login'/>}></Route>
      <Route path='contacts/{contactId}' element={<PrivateRoute component={FilterContacts} redirectTo='/contacts/{contactId}'/>}/>
      </Route>
    </Routes>
  );
};
