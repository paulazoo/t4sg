/* eslint-disable import/prefer-default-export */
import history from '../history';

import {
  setUser,
  setMasterData,
  setIsMaster,
  setCurrentlyLoading,
} from './index';

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
        dispatch(setUser(response));
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const getMasterData = () => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
    };
    api(`users`, requestOptions)
      .then((response) => {
        dispatch(setMasterData(response));
        console.log(response);
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

// POST calls:
export const postSignIn = (body) => {
  return (dispatch, getState) => {
    dispatch(setCurrentlyLoading(true));
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    };
    api(`signin`, requestOptions)
      .then((response) => {
        if (response.message === 'Logged in!') {
          dispatch(setUser(response.user));
          dispatch(setIsMaster(response.is_master));
          sessionStorage.setItem('access_token', response.access_token);
        }

        dispatch(setCurrentlyLoading(false));
      })
      .catch((error) => {
        dispatch(setCurrentlyLoading(false));
        console.error('API Error: ', error);
      });
  };
};

export const postRequestRegister = (body) => {
  return (dispatch, getState) => {
    dispatch(setCurrentlyLoading(true));
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    };
    api(`users`, requestOptions)
      .then((response) => {
        dispatch(setCurrentlyLoading(false));
      })
      .catch((error) => {
        dispatch(setCurrentlyLoading(false));
        console.error('API Error: ', error);
      });
  };
};

export const postRegister = (body) => {
  return (dispatch, getState) => {
    dispatch(setCurrentlyLoading(true));
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    };
    api(`users/register`, requestOptions)
      .then((response) => {
        dispatch(setCurrentlyLoading(false));
      })
      .catch((error) => {
        dispatch(setCurrentlyLoading(false));
        console.error('API Error: ', error);
      });
  };
};
