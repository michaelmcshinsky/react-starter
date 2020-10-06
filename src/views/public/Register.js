/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormInputEmail, FormInputPassword } from '../../components';

export function RegisterView () {
  const [state, setState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  function _handleChange (e) {
    e.persist();
    setState(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  }

  function _handleSubmit (e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={ _handleSubmit }>
      <fieldset>
        <div>
          <div>
            <label htmlFor="emailInput">Email</label>
          </div>
          <FormInputEmail
            value={ state.email }
            handleChange={ _handleChange }
          />
        </div>
        <div>
          <div>
            <label htmlFor="passwordInput">Password</label>
          </div>
          <FormInputPassword
            value={ state.password }
            handleChange={ _handleChange }
          />
        </div>
        <div>
          <label htmlFor="view-register--confirmPassword">
            Confirm Password
            <input
              id="view-register--confirmPassword"
              type="password"
              name="confirmPassword"
              value={ state.confirmPassword }
              onChange={ _handleChange }
              required
            />
          </label>
        </div>
      </fieldset>
      <button type="submit">Register</button>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/forgot-password">Forgot Password</Link>
        </li>
      </ul>
    </form>
  );
}
