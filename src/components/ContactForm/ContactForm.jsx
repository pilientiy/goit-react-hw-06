import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import style from '../ContactForm/ContactForm.module.css'

 function ContactForm() {
  const dispatch = useDispatch();
  const formNameId = useId();
  const formNumberId = useId();
  const contactsSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(9, "Too Short!")
      .max(12, "Too Long!")
      .required("Required"),
  });
  const handleSubmit = (values, actions) => {
    const { name } = values;
    const { number } = values;
    dispatch(addContact(name, number));
    actions.resetForm();
  };
  return (
    <Formik
      validationSchema={contactsSchema}
      onSubmit={handleSubmit}
      initialValues={{ name: "", number: "" }}
    >
      <Form className={style.form}>
        <div className={style.field}>
          <label htmlFor={formNameId}>Name</label>
          <Field
            className={style.nameInput}
            id={formNameId}
            type="text"
            name="name"
          />
          <ErrorMessage className={style.error}  name="name" component="span" />
        </div>
        <div className={style.field}>
          <label htmlFor={formNumberId}>Number</label>
          <Field
            id={formNumberId}
            type="tel"
            name="number"
          />
          <ErrorMessage className={style.error} name="number" component="span" />
        </div>
        <button  className={style.buttonSubmit} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;