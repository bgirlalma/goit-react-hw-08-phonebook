import styled from 'styled-components';

export const Wrapper = styled.div`

`;

export const LabelFilter = styled.label`
font-family: Cantarell;
font-weight: bold;
font-size: 24px;
display: flex;
justify-content: center;
color: rgb(142, 13, 138);
text-decoration: underline;
`;

export const FilterInput = styled.input`
display: flex;
width: 70%;
margin-left: auto;
margin-right: auto;
padding: 10px;
margin-top: 35px;
border-radius: 20px;
border: 2px solid rgb(21 31 216 / 30%);

font-family: Cantarell;
font-weight: normal;
font-size: 16px;

&:hover{
    border: 3px solid rgb(11 236 17 / 30%);
}
`;