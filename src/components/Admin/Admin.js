// Template for components
import React, { useEffect, useState } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';

// Redux
import { connect } from 'react-redux';
import { getMasterData } from '../../store/actions/api';
import Navbar from '../Shared/Navbar';

// Theme

// Custom Components

function Admin(props) {
  useEffect(() => {
    // if (props.isMaster === true) {
    props.getMasterData();
    // }
  }, []);

  return props.isMaster === true ? (
    <>
      <Navbar />
      <Typography>
        <Grid container direction='row' style={{ padding: '50px' }}>
          <Grid item xs={3}>
            <b>First Name</b>
          </Grid>
          <Grid item xs={3}>
            <b>Last Name</b>
          </Grid>
          <Grid item xs={3}>
            <b>Bio</b>
          </Grid>
          <Grid item xs={3}>
            <b>Email</b>
          </Grid>
          {props.masterData[0] &&
            props.masterData.map((data) => (
              <>
                <Grid item xs={3}>
                  {data.first_name}
                </Grid>
                <Grid item xs={3}>
                  {data.last_name}
                </Grid>
                <Grid item xs={3}>
                  {data.bio}
                </Grid>
                <Grid item xs={3}>
                  {data.email}
                </Grid>
              </>
            ))}
        </Grid>
      </Typography>
    </>
  ) : (
    <>
      <Navbar />
      <Typography>Hey ur not allowed here!</Typography>
    </>
  );
}

const mapStateToProps = (state) => ({
  masterData: state.user.masterData,
  isMaster: state.user.isMaster,
});

function mapDispatchToProps(dispatch) {
  return {
    getMasterData: () => dispatch(getMasterData()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
