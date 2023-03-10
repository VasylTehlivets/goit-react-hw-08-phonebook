import css from './Register.module.css';
import { useState } from 'react';
import authOperations from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';

const Register = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Registration</h2>
      <form className={css.formContainer} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          className={css.input}
          type="email"
          name="email"
          value={email}
          placeholder="example@email.com"
          onChange={handleChange}
        />
        <input
          className={css.input}
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit " className={css.btn}>
          Registration
        </button>
      </form>
    </div>
  );
};

export default Register;
