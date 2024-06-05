import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';

import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const phoneRegExp = '[0-9]{3}-[0-9]{2}-[0-9]{2}';

const ContactSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Too Short!')
    .max(50, 'To Long!')
    .required('Name is required!'),

  number: yup
    .string()
    .min(3, 'Too Short!')
    .max(9, 'To Long!')
    .matches(phoneRegExp, 'Phone number is not valid: xxx-xx-xx')
    .required('Phone number is required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ ...values, id: nanoid() }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm}>
        <div className={css.contactFormItem}>
          <label htmlFor="userName">Name</label>
          <Field
            className={css.contactFormInput}
            type="text"
            name="name"
            id="userName"
          />
          <ErrorMessage className={css.errorMsg} name="name" component="span" />
        </div>

        <div className={css.contactFormItem}>
          <label htmlFor="userNumber">Number</label>
          <Field
            className={css.contactFormInput}
            type="tel"
            name="number"
            id="userNumber"
          />
          <ErrorMessage
            className={css.errorMsg}
            name="number"
            component="span"
          />
        </div>
        <button className={css.BtnAdd} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
