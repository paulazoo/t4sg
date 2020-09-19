// Template for components
import React, { useEffect, useState } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';

// Redux
import { connect } from 'react-redux';
import { getMasterData } from '../../store/actions/api';
import Navbar from '../Shared/Navbar';
import ShowUsers from './ShowUsers';

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
      <div style={{ padding: 50 }}>
        <ShowUsers people={props.masterData} />
      </div>
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
