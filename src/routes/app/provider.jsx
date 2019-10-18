import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Provider = ({ auth, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      auth.authenticated
        ? <Component {...props} auth={auth} />
        : <Redirect to="/signin" />
    )}
  />
);

export default Provider;
