import css from './Contacts.module.css';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactFilter } from '../../components/ContactFilter/ContactFilter';
import { ContactList } from '../../components/ContactList/ContactList';

const Contacts = () => {
  return (
    <div className={css.contacts}>
      <h2 className={css.title}>
        Enter a name and phone number to add a contact
      </h2>
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </div>
  );
};

export default Contacts;
