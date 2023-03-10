import css from './Login.module.css';
import { useState } from 'react';
import authOperations from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  // const handleSubmit = async event => {
  //   event.preventDefault();
  //   try {
  //     await dispatch(authOperations.logIn({ email, password }));
  //     setPassword('');
  //   } catch (error) {
  //     if (error.response && error.response.status === 400) {
  //       alert('Incorrect email or password');
  //     } else {
  //       console.error(error);
  //     }
  //   }
  // };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Log in form</h2>
      <form className={css.formContainer} onSubmit={handleSubmit}>
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
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
