/* eslint-disable import/prefer-default-export */
import history from '../history';

import { setUser } from './index';

const api = (path, requestOptions) => {
  return fetch(`${process.env.REACT_APP_API_URL}${path}`, requestOptions).then(
    (res) => {
      // check for error response
      if (!res.ok) {
        // get error message from body or default to response status
        const error = res.status;
        return Promise.reject(error);
      }
      // otherwise return json response
      return res.json();
    }
  );
};

// Api Calls:

// GET Calls:
export const getUser = () => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
    };
    api(`users/${getState().user.user.id}`, requestOptions)
      .then((response) => {
        dispatch(setUser(response.user));
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

// POST calls:
export const postSignIn = (body) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    };
    api(`users/sign_in`, requestOptions)
      .then((response) => {
        dispatch(setUser(response.user));
        sessionStorage.setItem('access_token', response.access_token);
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const postRequestRegister = (body) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    };
    api(`users/request_register`, requestOptions)
      .then((response) => {})
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const postRegister = (body) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    };
    api(`users/register`, requestOptions)
      .then((response) => {})
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};
