import React from 'react';
import PropTypes from 'prop-types';

export function FormInputPassword ({ value, handleChange }) {
  return (
    <input
      id="passwordInput"
      type="password"
      name="password"
      value={ value }
      onChange={ handleChange }
      required
    />
  );
}

FormInputPassword.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
