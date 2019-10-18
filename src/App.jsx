import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from 'routes';
import stores from 'stores';

import { APP_BASENAME } from './constants';

function App() {
  return (
    <Provider store={stores}>
      <BrowserRouter basename={APP_BASENAME}>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
