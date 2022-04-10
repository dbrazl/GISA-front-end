import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';
import theme from './global/theme';
import GlobalStyles from './global/styles';

import SharedState from './state/provideAll';

import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <SharedState>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </SharedState>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
