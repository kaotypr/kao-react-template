import React, { useState, useEffect } from 'react';
import {
  Switch,
  useLocation,
  useHistory,
  matchPath,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { get as _get } from 'lodash/object';

import LayoutProvider from 'layouts';
import * as LayoutType from 'constant/layout';
import { BROWSER_HISTORY_CREATED_ACTION_NAME } from 'constant';
import { authenticate } from 'stores/modules/auth/action';
import { isUndefinedNull } from 'helper/variable';

import publicRoutes from './public';
import PublicProvider from './public/provider';
import appRoutes from './app';
import PrivateProvider from './app/provider';

export const getRouteObject = val => {
  const routeObj = [...publicRoutes, ...appRoutes].find(route => {
    const match = matchPath(val, route);
    if (match) return route;
    return null;
  });
  return routeObj;
};

const Routes = ({
  auth, dispatch,
}) => {
  const [layout, setLayout] = useState(LayoutType.DEFAULT);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const applyAuthenticate = () => dispatch(authenticate());
    applyAuthenticate();
  }, [dispatch]);

  useEffect(() => {
    /**
     * Handling when browesrHistory just created and no layout.key in the location object
     * the condition is fulfilled when user first time visit or enter the the app url
     * for example: user enter '/app/map' in the address bar and the map page uses a different layout
     * Switch will reset every children Route location property at the very beginning
     */
    if (history.action === BROWSER_HISTORY_CREATED_ACTION_NAME && isUndefinedNull(location.key)) {
      const routeObj = getRouteObject(location.pathname);
      const routeObjLayout = _get(routeObj, 'location.state.layout');
      if (routeObjLayout) {
        setLayout(routeObjLayout);
      }
    } else if (_get(location, 'state.layout')) {
      setLayout(location.state.layout); // USE CUSTOM LAYOUT IN APP LAYOUT WHEN LOCATION.STATE.LAYOUT IS SET
    } else if (auth.authenticated) {
      setLayout(LayoutType.APP); // DEFAULT LAYOUT WHEN USER IS AUTHENTICATED
    } else {
      setLayout(LayoutType.PUBLIC); // USE PUBLIC LAYOUT WHEN USER IS NOT AUTHENTICATED
    }
  }, [location, history.action, auth.authenticated]);

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
