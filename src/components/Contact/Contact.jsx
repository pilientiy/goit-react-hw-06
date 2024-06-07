import { HiUser, HiPhone } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import style from  '../Contact/Contact.module.css';

function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <>
        <div className={style.container}>
          <div>
              <div className={style.info}><HiUser className={style.icon} />{name}</div>
              <div className={style.info}><HiPhone className={style.icon} />{number}</div> 
          </div>
          <button className={style.button} onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
}

export default Contact;
