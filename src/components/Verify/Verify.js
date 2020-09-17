import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Typography, Grid } from '@material-ui/core';

// Redux
import { connect } from 'react-redux';
import { setUser } from '../../store/actions/index';
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
      {props.dialogueCurrentlyLoading ? (
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
    dialogueCurrentlyLoading: state.home.dialogueCurrentlyLoading,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setUser: (user) => dispatch(setUser(user)),
    postRegister: (body) => dispatch(postRegister(body)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Verify);
