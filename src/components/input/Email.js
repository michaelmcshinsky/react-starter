import React from 'react';
import PropTypes from 'prop-types';

export function FormInputEmail ({ value, handleChange }) {
  return (
    <input
      id="emailInput"
      type="email"
      name="email"
      value={ value }
      onChange={ handleChange }
      required
    />
  );
}

FormInputEmail.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
