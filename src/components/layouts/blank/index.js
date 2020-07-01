import React from 'react';
import PropTypes from 'prop-types';

export function LayoutBlank({ children }) {
  return <main id="app-layout--main">{children}</main>;
}

LayoutBlank.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
