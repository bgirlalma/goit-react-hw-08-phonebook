import styled from 'styled-components';
import {Form, Field} from 'formik'

export const Container = styled.div`

`;

export const PhoneTitle = styled.h2`
font-family: Cantarell;
font-weight: bold;
font-size: 24px;

color: rgb(142, 13, 138);
text-decoration: underline;
border: none;
margin-bottom: 10px;
`;

export const FormStyle = styled(Form)`
display: flex;
flex-direction: column;
// max-width: 760px;
`;

export const LabelStaled = styled.label`
font-family: Cantarell;
font-weight: normal;
font-size: 18px;
display: flex;
flex-direction: column;
`;

export const FieldStyle = styled(Field)`
margin-top: 10px;
margin-bottom: 10px;
padding: 10px;
border-radius: 20px;
border: 2px solid rgb(21 31 216 / 30%);

font-family: Cantarell;
font-weight: normal;
font-size: 16px;


&:hover{
    border: 3px solid rgb(11 236 17 / 30%);
}
`;

export const SubmitStyled = styled.button`
width:50%;
padding: 15px 10px;
border: none;
border-radius: 50px;

font-family: Cantarell;
font-weight: normal;
font-size: 16px;
background-color: #4D5AE5;
cursor: pointer;


&:hover{
    border: 3px solid rgb(11 236 17 / 30%);
    background-color: #fff;
}
`;