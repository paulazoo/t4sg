import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import AppStateProvider from './state';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import dotenv from 'dotenv';

// Redux
import store, { persistor } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

// App
import App from './App';

// Custom Components

require('dotenv').config();

if (process.env.REACT_APP_APP_ENV === 'production') {
  LogRocket.init(process.env.REACT_APP_LOGROCKET_KEY);
  setupLogRocketReact(LogRocket);
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Router>
        <AppStateProvider>
          <App />
        </AppStateProvider>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
