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

// Custom Components
import Landing from './components/Landing/Landing';

function App(props) {
  const createdTheme = createMuiTheme({
    palette: {
      primary: {
        light: 'hsl(213, 97%, 45%)',
        main: 'hsl(213, 97%, 30%)',
        dark: 'hsl(213, 97%, 14%)',
        contrastText: '#FFFFFF',
      },
      secondary: {
        light: 'hsl(24, 99%, 65%)',
        main: 'hsl(24, 99%, 51%)',
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

        {/* <PrivateRoute exact path='/dashboard' component={Dashboard} /> */}
        <Redirect to='/' />
      </Switch>
    </MuiThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return state;
};

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
