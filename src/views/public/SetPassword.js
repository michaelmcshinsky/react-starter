import React, { useState } from 'react';

export function SetPasswordView () {
  const [state, setState] = useState({
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
        <label htmlFor="setPasswordEmail">
          Email
          <input
            id="setPasswordEmail"
            type="password"
            name="password"
            value={ state.password }
            onChange={ _handleChange }
            required
          />
        </label>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
}
