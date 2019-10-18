import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import auth from './modules/auth/reducer';

const reducers = combineReducers({
  auth,
});

const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancher = composeEnhancers(applyMiddleware(thunk));

  const store = createStore(reducers, enhancher);

  return store;
};

export default configureStore();
