import { GlobalStyled } from "globalStyled";
import { BookContacts } from "./Contacts/bookContacts";
import { InputBookContacts } from "./Form/inputBookContacts";
import { FilterContacts } from "./Filter/filterContacts";
import styled from 'styled-components';

const Container = styled.div`
padding: 20px 20px 0 20px;
`;

const WrappContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 20px;
`;

export const App = () => {
  return (
    <Container>
      <WrappContainer>
      <InputBookContacts title="Phonebook"/>
      <FilterContacts/>
      </WrappContainer>
     <BookContacts/>
     <GlobalStyled/>
    </Container>
  );
};
