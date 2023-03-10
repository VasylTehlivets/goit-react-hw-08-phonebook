import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      {isLoggedIn ? (
        <NavLink
          className={({ isActive }) => (isActive ? css.active : css.link)}
          to="/contacts"
        >
          Contacts
        </NavLink>
      ) : (
        <NavLink
          className={({ isActive }) => (isActive ? css.active : css.link)}
          to="/"
        >
          Home
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;