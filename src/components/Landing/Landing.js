import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';

// Redux
import { connect } from 'react-redux';

// Theme
import './Landing.css';

// Custom Components
import Navbar from '../Shared/Navbar';

function Landing(props) {
  const history = useHistory();

  const goToRegister = () => {
    history.push('/register');
  };

  return (
    <>
      <div className='hero'>
        <Navbar />
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
