/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { routes } from '@/constants';

export function PrivateRoute ({ component: Component, ...rest }) {
  const isLoggedIn = true;

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      { ...rest }
      render={ (props) => {
        return isLoggedIn ? <Component { ...props } /> : <Redirect to={ routes.login } />;
      } }
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
};
