import { handleActions } from 'redux-actions';

import * as acttype from 'constants/actionType';

const defaultState = {
  loading: false,
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
    payload: null,
    error: false,
  }),
  [acttype.SUCCESS]: (state, { payload }) => ({
    ...state,
    loading: false,
    payload,
    error: null,
  }),
  [acttype.FAILURE]: (state, { error }) => ({
    ...state,
    loading: false,
    payload: null,
    error: error || 'Something went wrong',
  }),
  [acttype.SIGNOUT]: () => ({
    loading: false,
    payload: null,
    error: null,
  }),
}, defaultState, options);

export default auth;
