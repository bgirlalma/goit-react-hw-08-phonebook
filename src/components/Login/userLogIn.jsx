import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { userLogIn } from 'redux/User/userApi';
import Notiflix from 'notiflix';
import {Container, FormStyled, LabelStyled, FieldStyled, ButtonStyled } from './userLogIn.styled';

const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .min(10, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
      password: Yup.string()
      .min(10, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
  });

const UserLogIn = () => {
    const dispatch = useDispatch();

    const handleSubmitLogIn = async (values, {resetForm}) => {
     try {
        await dispatch(userLogIn(values))
      ;
     } catch (error) {
      Notiflix.Notify.failure("Incorrect password or email!")
     }
    }
    return(
        <Container>
        <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        
        validationSchema={SignupSchema}
        onSubmit={handleSubmitLogIn}
      >
              {({ values, handleChange, handleBlur, handleSubmit }) => (
          <FormStyled>
            <LabelStyled htmlFor='email'>Email
              <FieldStyled id="email" name="email" type="text" autoComplete="off" required placeholder="mariafrosina2023@gmail.com"></FieldStyled>
            </LabelStyled>
            <ErrorMessage name="email" component="div" />

            <LabelStyled htmlFor='password'>Password
              <FieldStyled id="password" name="password" type="password" autoComplete="off"></FieldStyled>
            </LabelStyled>
            <ErrorMessage name="password" component="div" />

            <ButtonStyled type="submit">Войти</ButtonStyled>
          </FormStyled>
        )}

      </Formik>
    </Container>
    )
}

export default UserLogIn;