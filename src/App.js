import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

// Theme
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout } from './store/actions/index';

// Custom Components
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Landing from './components/Landing/Landing';
import Homepage from './components/Homepage/Homepage';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Verify from './components/Verify/Verify';
import Admin from './components/Admin/Admin';

function App(props) {
  useEffect(() => {
    props.userLogout();
  }, []);

  const createdTheme = createMuiTheme({
    palette: {
      primary: {
        main: 'rgb(5, 199, 147, 0.95)',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#DCDCDC',
        contrastText: '#FFFFFF',
      },
      contrastText: '#fff',
      warning: {
        light: '#FF6961',
        main: '#DC453D',
        dark: '#C33C23',
      },
    },
    typography: {
      useNextVariants: true,
      fontFamily: 'Work Sans',
    },
    spacing: 8,
  });

  return (
    <MuiThemeProvider theme={createdTheme}>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/verify/:verifyToken' component={Verify} />

        <PrivateRoute exact path='/homepage' component={Homepage} />
        <PrivateRoute exact path='/admin' component={Admin} />
        <Redirect to='/' />
      </Switch>
    </MuiThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return state;
};

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
