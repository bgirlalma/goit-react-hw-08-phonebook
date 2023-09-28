// import { GlobalStyled } from "globalStyled";
// import { BookContacts } from "./Contacts/bookContacts";
// import { InputBookContacts } from "./Form/inputBookcontacts";
// import { FilterContacts } from "./Filter/filterContacts";
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Layout from './Layout';
import RegisterPages from './Pages/register';
import LoginPages from './Pages/login';

const Container = styled.div`
padding: 20px 20px 0 20px;
`;

// const WrappContainer = styled.div`
// display: grid;
// grid-template-columns: repeat(2, 1fr);
// gap: 20px;
// `;

export const App = () => {
  return (
    <Container>
    <Routes>
      <Route path='/' element={<Layout/>} >
      <Route path='login' element={<LoginPages/>}></Route>
      <Route path='register' element={<RegisterPages/>}></Route>
      
      </Route>
    </Routes>
    </Container>
  );
};


  // /* <WrappContainer>
  //     <InputBookContacts title="Phonebook"/>
  //     <FilterContacts/>
  //     </WrappContainer>
  //    <BookContacts/>
  //    <GlobalStyled/>