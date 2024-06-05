import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

import { selectFilteredContacts } from '../../redux/contactsSlice';

import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';

export default function Contact() {
  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map(contact => (
        <li className={css.contactsItem} key={contact.id}>
          <div className={css.contactContainer}>
            <div className={css.contacts}>
              <p className={css.contactsItem}>
                <FaUser className={css.myIcon} />
                {contact.name}
              </p>
              <p className={css.contactsItem}>
                <FaPhoneAlt className={css.myIcon} />
                {contact.number}
              </p>
            </div>
            <button
              className={css.contactBtn}
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
