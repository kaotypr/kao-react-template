import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Provider = ({ auth, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      auth.authenticated && rest.restricted
        ? <Redirect to="/dashboard" />
        : <Component {...props} auth={auth} />
    )}
  />
);

export default Provider;
