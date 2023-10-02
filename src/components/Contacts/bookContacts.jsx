import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/Contacts/contactsOperation";
import { getContacts, getError, getFilters, getIsLoading } from "redux/Contacts/selector";
import { deleteContact } from "redux/Contacts/contactsOperation";
import { ProgressBar } from 'react-loader-spinner';
import { AiFillDelete } from "react-icons/ai";
import {
  ContactsContainer,
  IsLoading,
  ErrorTitle,
  ItemStyled,
  ListStyled,
  ButtonDelete,
  StyledName,
  StyledTitle
} from "./bookContacts.styled";

export const BookContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filter = useSelector(getFilters) || '';

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  const selectFilteredContacts = () => {
    if (contacts && contacts.length) {
      if (filter) {
        return contacts.filter(contact =>
          contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
        );
      }
      return contacts;
    }
    return [];
  };

  const handleDeleteContact = (id) => {
    if (window.confirm(`Вы уверены, что хотите удалить контакт с id ${id}?`)) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <ContactsContainer>
      <StyledTitle>Contacts</StyledTitle>
      {isLoading && (
        <IsLoading>
          <ProgressBar
            height="120"
            width="140"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="#000000"
            barColor="#660000"
          />
        </IsLoading>
      )}
      {error && <ErrorTitle>An error occurred: {error}!!!</ErrorTitle>}
      {/* <ItemStyled>
        {selectFilteredContacts().map((item) => (
          <ListStyled key={item.id}>
            <StyledName>{item.name}:</StyledName>
            {item.number}
            <ButtonDelete onClick={() => handleDeleteContact(item.id)}>
              <AiFillDelete color="rgb(255, 0, 0)" />
            </ButtonDelete>
          </ListStyled>
        ))}
      </ItemStyled> */}
    </ContactsContainer>
  );
};