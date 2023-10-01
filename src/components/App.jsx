import { Route, Routes, redirect } from 'react-router-dom';
// import styled from 'styled-components';
import Layout from './Layout';
import RegisterPages from '../Pages/register';
import LoginPages from '../Pages/login';
import HomePage from '../Pages/homePage';
import { BookContacts } from './Contacts/bookContacts';
import { InputBookContacts } from './Form/inputBookcontacts';
import { FilterContacts } from './Filter/filterContacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/User/userApi';
import { useAuth } from './hooks/userHook';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';


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
      <Route path='contacts' element={<PrivateRoute component={BookContacts} redirectTo='/login'/>}>
        <Route path='/contacts' element={<InputBookContacts/>}/>
        <Route path='/contacts/{contactId}' element={<FilterContacts/>}/>
      </Route>
      </Route>
    </Routes>
  );
};
