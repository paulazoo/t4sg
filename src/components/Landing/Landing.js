import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';

// Redux
import { connect } from 'react-redux';

// Theme
import './Landing.css';

// Custom Components

function Landing(props) {
  const history = useHistory();

  const goToSignIn = () => {
    history.push('/signin');
  };

  const goToRegister = () => {
    history.push('/register');
  };

  const goToLanding = () => {
    history.push('/landing');
  };

  return (
    <>
      <div className='hero'>
        <div className='navbar'>
          <div className='logo' onClick={goToLanding}>
            <img
              width={64}
              height={64}
              src={require('../../assets/t4sglogopng.PNG')}
              alt='t4sg logo'
            />
            <Typography variant='h3' color='secondary'>
              T4SG
            </Typography>
          </div>
          <div className='navbuttons'>
            <Button color='primary' variant='contained' onClick={goToSignIn}>
              Sign In
            </Button>
            <Button color='primary' variant='contained' onClick={goToRegister}>
              Register
            </Button>
          </div>
        </div>
        <div className='content'>
          <Typography variant='h5' color='secondary'>
            Welcome to the
          </Typography>
          <Typography variant='h1' color='secondary'>
            Awesome Landing!!
          </Typography>
          <Button
            size='large'
            color='primary'
            variant='contained'
            onClick={goToRegister}
          >
            <b>Register Here</b>
          </Button>
        </div>
        <div className='animated-balloons'>
          <img src={require('../../assets/greenBalloon.png')} alt='balloon' />
          <img src={require('../../assets/greenBalloon.png')} alt='balloon' />
          <img src={require('../../assets/greenBalloon.png')} alt='balloon' />
          <img src={require('../../assets/greenBalloon.png')} alt='balloon' />
          <img src={require('../../assets/greenBalloon.png')} alt='balloon' />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
