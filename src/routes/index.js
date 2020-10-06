import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { routes } from '@/constants';
import { PartialHeader } from '@/components';
import {
  HomeView, LoginView, RegisterView, SetPasswordView, ForgotPasswordView,
} from '@/views/public';
import { ProfileView, DashboardView } from '@/views/private';
import { PublicRoute, PrivateRoute } from './components';

export function Routes () {
  return (
    <BrowserRouter basename="/">
      <PartialHeader />
      <Switch>
        <PublicRoute
          exact
          path="/"
          component={ HomeView }
        />
        <PublicRoute
          path={ routes.login }
          component={ LoginView }
        />
        <PublicRoute
          path="/forgot-password"
          component={ ForgotPasswordView }
        />
        <PublicRoute
          path="/register"
          component={ RegisterView }
        />
        <PublicRoute
          path="/set-password"
          component={ SetPasswordView }
        />
        <PublicRoute
          path="/set-password/:code"
          component={ SetPasswordView }
        />

        <BrowserRouter basename={ routes.admin }>
          <PrivateRoute
            exact
            path="/"
            component={ DashboardView }
          />
          <PrivateRoute
            path="/dashboard"
            component={ DashboardView }
          />
          <PrivateRoute
            path="/profile"
            component={ ProfileView }
          />
        </BrowserRouter>
      </Switch>
    </BrowserRouter>
  );
}
