import React from 'react';
import ReactDOM from 'react-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
