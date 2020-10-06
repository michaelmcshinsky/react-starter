import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function ForgotPasswordView () {
  const [state, setState] = useState({
    email: '',
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
        <label htmlFor="view-forgotPassword--email">
          Email
          <input
            id="view-forgotPassword--email"
            type="email"
            name="email"
            value={ state.email }
            onChange={ _handleChange }
            required
          />
        </label>
      </fieldset>
      <button type="submit">Submit</button>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </form>
  );
}
