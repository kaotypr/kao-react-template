import { createActions } from 'redux-actions';

import config from 'config';
import axiosins from 'axios.instance';
import { cLog, cError } from 'helper/console';
import * as acttype from 'constant/action';

const actions = createActions(
  acttype.REQUEST,
  acttype.SUCCESS,
  acttype.FAILURE,
  acttype.SIGNOUT, {
    prefix: 'AUTH',
    namespace: '/',
  },
);

export const authenticate = data => dispatch => {
  dispatch(actions.request());
  axiosins.post(config.API.SIGNIN, data)
    .then(res => {
      cLog(res);
      dispatch(actions.success());
    })
    .catch(err => {
      cError(err);
      dispatch(actions.failure());
    });
};

export const signout = () => dispatch => {
  dispatch(actions.authSignout());
};
