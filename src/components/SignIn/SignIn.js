// Template for components
import React, { useEffect, useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';

// Redux
import { connect } from 'react-redux';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Custom Components

const useStyles = makeStyles((theme) => ({}));

function SignIn(props) {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    console.log('signin');
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Grid container direction='row' justify='center' alignItems='center'>
      <Grid item>
        <TextField
          variant='outlined'
          value={email}
          onChange={changeEmail}
          label='Email'
        />
      </Grid>
      <Grid item>
        <TextField
          variant='outlined'
          value={password}
          onChange={changePassword}
          label='Password'
        />
      </Grid>
      <Button
        onClick={handleSignIn}
        color='primary'
        variant='contained'
        disabled={props.currentlyLoading}
      >
        Sign In
      </Button>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  currentlyLoading: state.home.currentlyLoading,
});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
