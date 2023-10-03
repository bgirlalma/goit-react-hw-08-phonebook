import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { userRegistration } from 'redux/User/userApi';
import * as Yup from 'yup';
import Notiflix from 'notiflix';
import {Container, FormStyled, LabelStyled, FieldStyled, ButtonStyled } from './formRegistration.styled';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'Too Short!')
      .max(15, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .min(10, 'Too Short!')
      .required('Required'),
    password: Yup.string()
        .min(10, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
  });


const FormRegistration = () => {
    const dispatch = useDispatch();

    const handleSubmit = async (values, {resetForm}) => {
     try {
      console.log('Submitting:', values);
      await  dispatch(userRegistration(values))
      resetForm();
      Notiflix.Notify.success("User successfully registered!")
     } catch (error) {
      Notiflix.Notify.failure("Error creating a new user!")
     }
    }
    return (
      <Container className='section-registration'>
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
            <FieldStyled id="name" name="name" type="text" autoComplete="off" required placeholder="Adrian Cross"></FieldStyled>
            </LabelStyled>
            <ErrorMessage name="name" component="div"/>

            <LabelStyled htmlFor='email'>Email
            <FieldStyled id="email" name="email" type="email" autoComplete="off" required placeholder="mariafrosina2023@gmail.com"></FieldStyled>
            </LabelStyled>
            <ErrorMessage name="email" component="div"/>

            <LabelStyled htmlFor='password'>Password
            <FieldStyled id="password" name="password" type="password" autoComplete="off" required></FieldStyled>
            </LabelStyled>
            <ErrorMessage name="password" component="div"/>

            <ButtonStyled type="submit">Registration</ButtonStyled>
        </FormStyled>
        )}
        

      </Formik>
      </Container>
    )
}

export default FormRegistration;