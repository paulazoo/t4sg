import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Typography, Grid } from '@material-ui/core';

// Redux
import { connect } from 'react-redux';
import { postRegister } from '../../store/actions/api';

// Custom Components
import Loading from '../Shared/Loading';

function Verify({ ...props }) {
  const history = useHistory();
  const { verifyToken } = useParams();

  useEffect(() => {
    console.log(verifyToken);
    props.postRegister({
      verify_token: verifyToken,
    });
  }, []);

  const handleGoToSignIn = () => {
    history.push('/signin');
  };

  return (
    <>
      {props.currentlyLoading ? (
        <Loading />
      ) : (
        <Grid container direction='column' justify='center' alignItems='center'>
          <Grid item>
            <Typography>Email successfully verified!</Typography>
          </Grid>
          <Grid item>
            <Button
              color='primary'
              variant='contained'
              onClick={handleGoToSignIn}
            >
              Go To Sign In
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    currentlyLoading: state.home.currentlyLoading,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    postRegister: (body) => dispatch(postRegister(body)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Verify);
