import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';

// Redux
import { connect } from 'react-redux';

// Theme
import './Navbar.css';

// Custom Components

function Navbar(props) {
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

  const goToHomepage = () => {
    history.push('/homepage');
  };

  const goToAdmin = () => {
    history.push('/admin');
  };

  return (
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
        {props.user.id &&
          // sessionStorage.getItem('access_token') &&
          props.isMaster === true && (
            <Button color='primary' variant='contained' onClick={goToAdmin}>
              Admin
            </Button>
          )}
        {props.user.id && (
          // sessionStorage.getItem('access_token') &&
          <Button color='primary' variant='contained' onClick={goToHomepage}>
            Secret Homepage
          </Button>
        )}
        <Button color='primary' variant='contained' onClick={goToSignIn}>
          {props.user.id ? 'Sign Out' : 'Sign In'}
        </Button>
        <Button color='primary' variant='contained' onClick={goToRegister}>
          Register
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isMaster: state.user.isMaster,
  user: state.user.user,
});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
