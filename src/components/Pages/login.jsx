import { Formik, ErrorMessage, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import styled from "styled-components";
import { userLogIn } from 'redux/User/userApi';
import Notiflix from 'notiflix';

const FormStyled = styled(Form)`
max-width: 400px;
`;
const LabelStyled = styled.label`
display: flex;
flex-direction: column;
`

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

const LoginPages = () => {
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
    <div>
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
              <Field id="email" name="email" type="text" autoComplete="off" required placeholder="mariafrosina2023@gmail.com"></Field>
            </LabelStyled>
            <ErrorMessage name="email" component="div" />

            <LabelStyled htmlFor='password'>Password
              <Field id="password" name="password" type="password" autoComplete="off"></Field>
            </LabelStyled>
            <ErrorMessage name="password" component="div" />

            <button type="submit">Войти</button>
          </FormStyled>
        )}

      </Formik>
    </div>
)
}

export default LoginPages;