// Template for components
import React, { useEffect, useState } from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';

// Redux
import { connect } from 'react-redux';
import { postRequestRegister } from '../../store/actions/api';

// Theme
import './Register.css';

// Custom Components
import Navbar from '../Shared/Navbar';

function Register(props) {
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
      password_confirmation: password,
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
      <Navbar />
      <div className='register-container'>
        <Grid
          container
          direction='row'
          justify='center'
          spacing={3}
          alignItems='center'
          className='main-content'
        >
          <Grid item>
            <Typography variant='h3'>Register</Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              variant='outlined'
              label='Email'
              value={email}
              onChange={handleChange}
              id='email'
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id='firstName'
              value={firstName}
              onChange={handleChange}
              variant='outlined'
              label='First Name'
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              id='lastName'
              value={lastName}
              onChange={handleChange}
              variant='outlined'
              label='Last Name'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant='outlined'
              id='bio'
              label='Bio'
              placeholder='Tell us about yourself :D'
              value={bio}
              onChange={handleChange}
              multiline
              rows={3}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant='outlined'
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
      </div>
    </>
  ) : (
    <>
      <Navbar />
      <Grid container direction='column' justify='center' alignItems='center'>
        {/* <Grid item>
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
        </Grid> */}
        <Grid item>
          <Typography>Registered!</Typography>
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
