import { Formik, ErrorMessage, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { userRegistration } from 'redux/User/userApi';
import * as Yup from 'yup';
// import Notiflix from 'notiflix';
import styled from "styled-components";

const FormStyled = styled(Form)`
max-width: 400px;
`;
const LabelStyled = styled.label`
display: flex;
flex-direction: column;
`
const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .min(10, 'Too Short!')
      .required('Required'),
    password: Yup.string()
        .min(10, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
  });

const RegisterPages = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, {resetForm}) => {
      dispatch(userRegistration(values))
      resetForm()
    }
    return(
        <div>
            <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <FormStyled>
                <LabelStyled htmlFor='name'>Name
                <Field id="name" name="name" type="text" required placeholder="Adrian Cross"></Field>
                </LabelStyled>
                <ErrorMessage name="name" component="div"/>

                <LabelStyled htmlFor='email'>Email
                <Field id="email" name="email" type="text" required placeholder="mariafrosina2023@gmail.com"></Field>
                </LabelStyled>
                <ErrorMessage name="email" component="div"/>

                <LabelStyled htmlFor='password'>Password
                <Field id="password" name="password" type="text"></Field>
                </LabelStyled>
                <ErrorMessage name="password" component="div"/>
    
                <button type="submit">Registration</button>
            </FormStyled>
            )}
            
    
          </Formik>
        </div>
    )
}

export default RegisterPages;