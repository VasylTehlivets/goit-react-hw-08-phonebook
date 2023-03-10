import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => (
  <div className={css.container}>
    <h1 className={css.title}>Welcome to your Phonebook! </h1>
    <div className={css.optionContainer}>
      <NavLink
        className={({ active }) => (active ? css.active : css.linc)}
        to="/login"
      >
        Log in
      </NavLink>
      <p className={css.option}>or</p>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : css.linc)}
        to="/register"
      >
        Register
      </NavLink>
    </div>
  </div>
);

export default Home;
