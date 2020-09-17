import React from 'react';
import * as JWT from 'jwt-decode';
import { Route, Redirect } from 'react-router-dom';

import EventLogin from '../Event/EventLogin';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userLoggedIn = sessionStorage.getItem('access_token');

  // TODO: should be put into middleware
  // if (userLoggedIn && JWT(userLoggedIn).exp < Date.now() / 1000) {
  //   userLoggedIn = false;
  //   sessionStorage.clear();
  // }

  return (
    <Route
      {...rest}
      render={(props) =>
        !userLoggedIn || userLoggedIn === 'undefined' ? (
          <Redirect to='/' />
        ) : (
          <Component {...props} />
        )}
    />
  );
};

export default PrivateRoute;
