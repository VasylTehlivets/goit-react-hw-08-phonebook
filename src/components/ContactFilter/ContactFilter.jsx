import css from './ContactFilter.module.css';
import { useContacts } from '../../hooks/hooks';

export const ContactFilter = () => {
  const { filter, setFilter } = useContacts();

    const onChangeFilter = e => {
    setFilter(e.target.value);
  };
  return (

    <label className={css.descr}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
        placeholder="Find contacts by name"
      />
    </label>
  );
};