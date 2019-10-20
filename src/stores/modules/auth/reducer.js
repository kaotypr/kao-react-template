import { handleActions } from 'redux-actions';

import * as acttype from 'constant/action';

const defaultState = {
  loading: false,
  authenticated: false,
  payload: null,
  error: null,
};

const options = {
  prefix: 'AUTH',
  namespace: '/',
};

const auth = handleActions({
  [acttype.REQUEST]: state => ({
    ...state,
    loading: true,
    authenticated: false,
  }),
  [acttype.SUCCESS]: (state, { payload }) => ({
    ...state,
    loading: false,
    authenticated: true,
    payload,
  }),
  [acttype.FAILURE]: (state, { error }) => ({
    ...state,
    loading: false,
    authenticated: false,
    error: error || 'Not Authenticated',
  }),
  [acttype.SIGNOUT]: () => ({
    loading: false,
    authenticated: false,
    payload: null,
  }),
}, defaultState, options);

export default auth;
