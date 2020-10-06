import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { routes } from '../../constants';

export const PartialHeader = () => {
  return (
    <header id="app-header">
      <div className="app-header--logo">
        <Link to="/">
          <img
            src="//via.placeholder.com/35"
            alt="logo"
          />
        </Link>
      </div>
      <nav className="app-header--navigation">
        <li>
          <NavLink
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={ routes.admin }>Admin</NavLink>
        </li>
        <li>
          <NavLink to={ routes.login }>Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </nav>
    </header>
  );
};
