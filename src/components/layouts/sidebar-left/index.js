import React from 'react';
import PropTypes from 'prop-types';

export function LayoutSidebarLeft({ children }) {
  return <aside id="app-layout--sidebar_left">{children}</aside>;
}

LayoutSidebarLeft.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
