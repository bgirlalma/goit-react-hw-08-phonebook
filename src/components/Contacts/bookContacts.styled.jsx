import styled from "styled-components";

export const ContactsContainer = styled.div`
`;

export const StyledTitle = styled.h2`
display:flex;
justify-content: center;
font-family: Oxygen;
font-weight: bold;
font-size: 24px;
margin-bottom: 40px;
color: rgb(142, 13, 138);
text-decoration: none;
border: none;
`;

export const IsLoading = styled.p`
display: flex;
justify-content: center;
margin-top: 100px;
`;

export const ErrorTitle = styled.h2`
border: none;
font-family: Oxygen, sans-serif;
font-size: 22px;
color: red;
`;

export const ItemStyled = styled.ul`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 10px;
color: black;
`;

export const ListStyled = styled.li`
display: flex;
justify-content: center;
border: 1px solid #660000;
border-radius: 10px;
padding: 10px 0 10px 0;

font-family: Oxygen, sans-serif;
font-size: 16px;
color: black;
`;

export const StyledName = styled.span`
font-family: Oxygen, sans-serif;
font-size: 16px;
margin-right: 10px;
`;

export const ButtonDelete = styled.button`
padding: 2px 2px;
margin-left: 10px;
cursor: pointer;
background-color: inherit;
border: none;
`;