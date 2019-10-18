import React, { useEffect } from 'react';
import {
  Switch,
  withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';

import { authenticate } from 'stores/modules/auth/action';
import { cLog } from 'helper/console';

import publicRoutes from './public';
import PublicProvider from './public/provider';
import privateRoutes from './private';
import PrivateProvider from './private/provider';

const Routes = ({ auth, dispatch }) => {
  useEffect(() => {
    const applyAuthenticate = () => dispatch(authenticate());
    applyAuthenticate();
  }, [dispatch]);

  useEffect(() => {
    cLog(auth);
  }, [auth]);

  const publicRoutesProvider = publicRoutes.map(conf => (<PublicProvider {...conf} auth={auth} />));

  const privateRoutesProvider = privateRoutes.map(conf => (<PrivateProvider {...conf} auth={auth} />));

  return (
    <Switch>
      {publicRoutesProvider}
      {privateRoutesProvider}
    </Switch>
  );
};

const connectedRoutes = connect(({ auth }) => ({ auth }))(Routes);

export default withRouter(connectedRoutes);
