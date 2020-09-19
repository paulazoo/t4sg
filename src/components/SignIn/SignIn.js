// Template for components
import React, { useEffect, useState } from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';

// Redux
import { connect } from 'react-redux';
import { postSignIn } from '../../store/actions/api';
import { userLogout } from '../../store/actions/index';

// Theme

// Custom Components
import Navbar from '../Shared/Navbar';

function SignIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    props.postSignIn({
      email,
      password,
    });
  };

  const handleSignOut = (e) => {
    props.userLogout();
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      {!sessionStorage.getItem('access_token') ? (
        <>
          <Navbar />
          <Grid
            container
            direction='column'
            spacing={3}
            justify='center'
            alignItems='center'
          >
            <Grid item>
              <Typography variant='h3'>Sign In</Typography>
            </Grid>
            <Grid item>
              <TextField
                id='email'
                variant='outlined'
                value={email}
                onChange={changeEmail}
                label='Email'
              />
            </Grid>
            <Grid item>
              <TextField
                id='password'
                variant='outlined'
                value={password}
                onChange={changePassword}
                label='Password'
              />
            </Grid>
            <Grid item>
              <Button
                onClick={handleSignIn}
                color='primary'
                variant='contained'
                disabled={props.currentlyLoading}
              >
                Sing In
              </Button>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Navbar />
          <Typography>Signed in!</Typography>
          <Button
            onClick={handleSignOut}
            color='primary'
            variant='contained'
            disabled={props.currentlyLoading}
          >
            Sing Out
          </Button>
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  currentlyLoading: state.home.currentlyLoading,
});

function mapDispatchToProps(dispatch) {
  return {
    postSignIn: (body) => dispatch(postSignIn(body)),
    userLogout: () => dispatch(userLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
