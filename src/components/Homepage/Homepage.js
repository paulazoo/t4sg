// Template for components
import React, { useEffect, useState } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';

// Redux
import { connect } from 'react-redux';
import { getUser } from '../../store/actions/api';
import Navbar from '../Shared/Navbar';

// Theme

// Custom Components

function Homepage(props) {
  useEffect(() => {
    props.getUser();
  }, []);

  return (
    <>
      <Navbar />
      <Grid container direction='column' justify='center' alignItems='center'>
        <Grid item>
          <Typography>Super secret homepage!!</Typography>
        </Grid>
        <Grid item>
          <Typography>
            <b>First name: </b>
            {props.user.first_name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            <b>last name: </b>
            {props.user.last_name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            <b>Email: </b>
            {props.user.email}
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            <b>Bio: </b>
            {props.user.bio}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

function mapDispatchToProps(dispatch) {
  return {
    getUser: () => dispatch(getUser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
