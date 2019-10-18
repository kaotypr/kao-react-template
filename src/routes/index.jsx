import React, { useState, useEffect } from 'react';
import {
  Switch,
  useLocation,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { get as _get } from 'lodash/object';

import LayoutProvider from 'layouts';
import * as LayoutType from 'constants/layout';
import { authenticate } from 'stores/modules/auth/action';

import publicRoutes from './public';
import PublicProvider from './public/provider';
import appRoutes from './app';
import PrivateProvider from './app/provider';

const Routes = ({
  auth, dispatch,
}) => {
  const [layout, setLayout] = useState(LayoutType.DEFAULT);
  const location = useLocation();

  useEffect(() => {
    const applyAuthenticate = () => dispatch(authenticate());
    applyAuthenticate();
  }, [dispatch]);

  useEffect(() => {
    if (auth.authenticated) {
      if (_get(location, 'state.layout')) {
        setLayout(location.state.layout); // USE CUSTOM LAYOUT IN APP LAYOUT
      } else {
        setLayout(LayoutType.APP); // DEFAULT LAYOUT WHEN USER IS AUTHENTICATED
      }
    } else {
      setLayout(LayoutType.PUBLIC); // USE PUBLIC LAYOUT WHEN USER IS NOT AUTHENTICATED
    }
  }, [location, auth.authenticated]);

  const publicRoutesProvider = publicRoutes.map(conf => (<PublicProvider {...conf} auth={auth} />));

  const appRoutesProvider = appRoutes.map(conf => (<PrivateProvider {...conf} auth={auth} />));

  return (
    <LayoutProvider layout={layout}>
      <Switch>
        {appRoutesProvider}
        {publicRoutesProvider}
      </Switch>
    </LayoutProvider>
  );
};

const connectedRoutes = connect(({ auth }) => ({ auth }))(Routes);

export default connectedRoutes;
