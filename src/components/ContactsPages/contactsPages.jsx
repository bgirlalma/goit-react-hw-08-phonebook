import { BookContacts } from "components/Contacts/bookContacts"
import { FilterContacts } from "components/Filter/filterContacts";
import { InputBookContacts } from "components/Form/inputBookcontacts"
import styled from 'styled-components';

const WrappContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
padding: 20px;
gap: 10px;
`;

export const ContactsPages = () => {
    return(
        <WrappContainer>
            <InputBookContacts/>
            <BookContacts/>   
            <FilterContacts/>
        </WrappContainer>
    )
}