/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { routes } from '@/constants';

export function PublicRoute ({ component: Component, ...rest }) {
  const isLoggedIn = false;

  return (
    <Route
      { ...rest }
      render={ (props) => {
        return isLoggedIn ? <Redirect to={ routes.admin } /> : <Component { ...props } />;
      } }
    />
  );
}

PublicRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
};
