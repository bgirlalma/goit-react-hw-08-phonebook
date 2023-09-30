import styled from "styled-components";
import { Form, Field } from 'formik';

export const Container = styled.div`
max-width: 400px;
padding: 20px 20px 0 20px;
margin-left: auto;
margin-right: auto;
`
export const FormStyled = styled(Form)`
display: flex;
flex-direction: column;
`;

export const FieldStyled = styled(Field)`
font-family: -apple-system, sans-serif;
font-size: 14px;
border: none;
border-radius: 20px;
padding: 10px 10px 10px 20px;
margin-top: 10px;
`
export const LabelStyled = styled.label`
display: flex;
flex-direction: column;
font-family: -apple-system, sans-serif;
font-size: 16px;
color: white;
margin-bottom: 10px;
`;

export const ButtonStyled = styled.button`
max-width: 200px;
margin-top: 20px;
font-family: -apple-system, sans-serif;
font-size: 14px;
color: black;
background-color: rgba(47, 108, 224, 0.57);
border: none;
border-radius: 20px;
padding: 15px;
cursor: pointer;

&:hover {
  background-color: rgba(255, 0, 0, 1);
  color: white;
}
`;