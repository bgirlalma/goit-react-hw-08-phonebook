import { Formik, ErrorMessage, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
// import Notiflix from 'notiflix';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    email: Yup.string()
    .min(10, 'Too Short!')
      .required('Required'),
  });

const LoginPages = () => {
    const dispatch = useDispatch();
return(
    <div>
        <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        
        validationSchema={SignupSchema}
        // onSubmit={}
      >
        <Form>
            <label htmlFor='name'>Name
            <Field id="name" name="name" type="text" required placeholder="Марія Фросіна"></Field>
            </label>
            <ErrorMessage name="name" component="div"/>
            <label htmlFor='email'>Email
            <Field id="email" name="email" type="text" required placeholder="mariafrosina2023@gmail.com"></Field>
            </label>
            <ErrorMessage name="email" component="div"/>

            <button type="submit">Log In</button>
        </Form>

      </Formik>
    </div>
)
}

export default LoginPages;