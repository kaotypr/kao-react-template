import React, { useEffect } from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';

import { authenticate } from 'stores/modules/auth/action';
import { cLog } from 'helper/console';

import publicRoutes from './public';
import privateRoutes from './private';

const Routes = ({ auth, dispatch }) => {
  useEffect(() => {
    const applyAuthenticate = () => dispatch(authenticate());
    applyAuthenticate();
  }, [dispatch]);

  useEffect(() => {
    cLog(auth);
  }, [auth]);

  return (
    <Switch>
      {publicRoutes.map(route => (<Route {...route} />))}
      {privateRoutes.map(route => (<Route {...route} />))}
    </Switch>
  );
};

const connectedRoutes = connect(({ auth }) => ({ auth }))(Routes);

export default withRouter(connectedRoutes);
