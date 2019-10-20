import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { MuiThemeProvider } from '@material-ui/core/styles';

import i18n from 'assets/lang';
import theme from 'assets/theme';
import Routes from 'routes';
import stores from 'stores';

import { APP_BASENAME } from './constant';

function App() {
  return (
    <Provider store={stores}>
      <BrowserRouter basename={APP_BASENAME}>
        <I18nextProvider i18n={i18n}>
          <MuiThemeProvider theme={theme}>
            <Routes />
          </MuiThemeProvider>
        </I18nextProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
