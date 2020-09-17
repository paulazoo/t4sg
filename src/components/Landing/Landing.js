import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';

// Redux
import { connect } from 'react-redux';

// Custom Components

function Landing(props) {
  const history = useHistory();

  const goToSignIn = () => {
    history.push('/signin');
  };

  const goToRegister = () => {
    history.push('/register');
  };

  return (
    <>
      <Grid container direction='column' justify='center' alignItems='center'>
        <Grid item>
          <Typography>Not secret landing page</Typography>
        </Grid>
        <Grid item>
          <Button color='primary' variant='contained' onClick={goToSignIn}>
            Sign In
          </Button>
        </Grid>
        <Grid item>
          <Typography>Don't have an account?</Typography>
        </Grid>
        <Grid item>
          <Button color='primary' variant='contained' onClick={goToRegister}>
            Register Here
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
