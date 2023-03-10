import css from './UserMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import authSelectors from '../../redux/auth/authSelectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={css.container}>
      <p className={css.link}>Welcome, </p>
      <p className={css.name}>{name} </p>
      <button
        className={css.btn}
        type="submit"
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        Log out
      </button>
    </div>
  );
}