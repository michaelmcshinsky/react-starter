import React from 'react';
import PropTypes from 'prop-types';

export function LayoutDefault({ children }) {
  return <main id="app-layout--default">{children}</main>;
}

LayoutDefault.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
