import { Formik, ErrorMessage, Form, Field } from 'formik';
// import { useDispatch } from 'react-redux';
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
      password: Yup.string()
      .min(10, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
  });

const LoginPages = () => {
    // const dispatch = useDispatch();
return(
    <div>
        <Formik
        initialValues={{
          name: '',
          password: '',
        }}
        
        validationSchema={SignupSchema}
        // onSubmit={}
      >
        <FormStyled >
            <LabelStyled htmlFor='name'>Name
            <Field id="name" name="name" type="text" required placeholder="Марія Фросіна"></Field>
            </LabelStyled>
            <ErrorMessage name="name" component="div"/>

            <LabelStyled htmlFor='password'>Password
            <Field id="password" name="password" type="text"></Field>
            </LabelStyled>
            <ErrorMessage name="password" component="div"/>

            <button type="submit">Log In</button>
        </FormStyled>

      </Formik>
    </div>
)
}

export default LoginPages;