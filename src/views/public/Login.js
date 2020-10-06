import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function LoginView () {
  const [state, setState] = useState({
    email: '',
    password: '',
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
          <label htmlFor="view-login--email">
            Email
            <input
              id="view-login--email"
              type="email"
              name="email"
              value={ state.email }
              onChange={ _handleChange }
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="view-login--password">
            Password
            <input
              id="view-login--password"
              type="password"
              name="password"
              value={ state.password }
              onChange={ _handleChange }
              required
            />
          </label>
        </div>
      </fieldset>
      <button type="submit">Login</button>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/forgot-password">Forgot Password</Link>
        </li>
      </ul>
    </form>
  );
}
