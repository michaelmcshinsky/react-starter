import React from 'react';
import PropTypes from 'prop-types';

export function LayoutAdmin({ children }) {
  return <main id="app-layout--admin">{children}</main>;
}

LayoutAdmin.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
