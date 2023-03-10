import css from './ContactList.module.css';
import { Loader } from '../Loader/Loader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useContacts } from '../../hooks/hooks';
import { contactsOperations } from '../../redux/contacts/contactsOperations';
import { deleteToast } from '../Toast/Toast';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';

export const ContactList = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const dispatch = useDispatch();
  const { contacts, isLoaging, filter, deleteContact, setFilter } =
    useContacts();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const filteredContacts = findContacts();

  return (
    <>
      {isLoaging && <Loader />}
      {isLoggedIn && (
        <ul className={css.list}>
          {contacts &&
            filteredContacts.map(({ id, name, number }) => {
              return (
                <li className={css.item} key={id}>
                  <p className={css.name}>{name}:</p>
                  <p className={css.name}>{number}</p>
                  <button
                    className={css.btn}
                    type="button"
                    onClick={() => {
                      deleteContact(id);
                      deleteToast(`${name} tel:${number} is deleted`);
                      setFilter('');
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
        </ul>
      )}
    </>
  );
};