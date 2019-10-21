import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from 'assets/theme';
import Routes from 'routes';
import stores from 'stores';
import 'assets/lang';

import { APP_BASENAME } from './constant';

function App() {
  return (
    <Provider store={stores}>
      <BrowserRouter basename={APP_BASENAME}>
        <MuiThemeProvider theme={theme}>
          <Routes />
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
