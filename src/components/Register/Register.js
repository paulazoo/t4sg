// Template for components
import React, { useEffect, useState } from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';

// Redux
import { connect } from 'react-redux';
import { postRequestRegister } from '../../store/actions/api';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Custom Components

const useStyles = makeStyles((theme) => ({}));

function Register(props) {
  const classes = useStyles();

  const [bio, setBio] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [registered, setRegistered] = useState(false);

  const handleRegister = () => {
    setRegistered(true);
    props.postRequestRegister({
      bio,
      password,
      email,
      first_name: firstName,
      last_name: lastName,
    });
  };

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'bio':
        setBio(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'firstName':
        setFirstName(e.target.value);
        break;
      case 'lastName':
        setLastName(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  return !registered ? (
    <>
      <Grid container='row' justify='center' alignItems='center'>
        <Grid item xs={12}>
          <TextField
            variant='outlined'
            label='Email'
            value={email}
            onChange={handleChange}
            id='email'
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id='firstName'
            value={firstName}
            onChange={handleChange}
            variant='outlined'
            label='First Name'
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            id='lastName'
            value={lastName}
            onChange={handleChange}
            variant='outlined'
            label='Last Name'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='bio'
            label='Bio'
            value={bio}
            onChange={handleChange}
            multiline
            rows={3}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='password'
            label='Password'
            value={password}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <Button
            color='primary'
            variant='contained'
            onClick={handleRegister}
            disabled={props.currentlyLoading}
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </>
  ) : (
    <>
      <Grid container direction='column' justify='center' alignItems='center'>
        <Grid item>
          <Typography>{`We sent a verification email to ${email}. Please verify your email to finish registering.`}</Typography>
        </Grid>
        <Grid item>
          <Typography>
            Did't get the email? Remember to check your spam
          </Typography>
        </Grid>
        <Grid item>
          <Button variant='contained' color='primary' onClick={handleRegister}>
            Resend verification email
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({
  currentlyLoading: state.home.currentlyLoading,
});

function mapDispatchToProps(dispatch) {
  return {
    postRequestRegister: (body) => dispatch(postRequestRegister(body)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
